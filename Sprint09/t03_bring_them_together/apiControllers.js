import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/users.js';
import { generatePassword, sendEmail } from "./utils.js";

const secret = process.env.JWT_SECRET || 'mystrongsecretkey';

const registerUser = async (req, res) => {
    const { login, password, confirm_pass, fullname, email_address } = req.body;

    if (password !== confirm_pass) {
        return res.json({error: 'Passwords do not match'});
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const response = await User.save(login, hash, fullname, email_address);

        if (response.error_code) {
            throw new Error(response.error_message);
        }

        const token = jwt.sign({login}, secret, {expiresIn: '1h'});
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000
        });

        res.status(200).send();
    }
    catch (err) {
        if (err.error_code === 'USER_EXISTS') {
            res.json({error: err.error_message});
        }
        else if (err.error_code === 'EMAIL_EXISTS') {
            res.json({error: err.error_message});
        }
    }
}

const loginUser = async (req, res) => {
    const { login, password } = req.body;

    try {
        const response = await User.find(login);

        if (response.error_code) {
            throw response;
        }

        const isValid = await bcrypt.compare(password, response.password);

        if (!isValid) {
            throw {error_code: 'INVALID_PASSWORD', error_message: 'Invalid password'};
        }

        const token = jwt.sign({login}, secret, {expiresIn: '1h'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000
        });

        res.status(200).send();
    }
    catch (err) {
        if (err.error_code === 'USER_NOT_FOUND') {
            res.json({error: err.error_message});
        }
        else if (err.error_code === 'INVALID_PASSWORD') {
            res.json({error: err.error_message});
        }
    }
}

const remindPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const response = await User.findByEmail(email);

        if (!response.user) {
            throw { error_code: 'EMAIL_NOT_FOUND', error_message: 'Email not found' };
        }

        const password = generatePassword();
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const success = await User.updatePassword(email, hash);
        if (!success) {
            throw { error_code: 'ERROR_CHANGING_PASSWORD', error_message: 'Error changing password' };
        }

        await sendEmail(email, password);

        res.status(200).send();
    }
    catch (err) {
        if (err.error_code === 'EMAIL_NOT_FOUND') {
            res.json({error: err.error_message});
        }
        console.log(err);
    }
}

export { registerUser, loginUser, remindPassword }