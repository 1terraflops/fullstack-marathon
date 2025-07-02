import express from 'express';
import multer from 'multer';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
import crypto from 'crypto';
import User from './models/user.js';

dotenv.config();
const secret = process.env.JWT_SECRET || 'mystrongsecretkey';

const app = express();
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', upload.none(), async (req, res) => {
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

        res.status(200).send({token, status: response.status});
    }
    catch (err) {
        if (err.error_code === 'USER_NOT_FOUND') {
            res.send({error: err.error_message});
        }
        else if (err.error_code === 'INVALID_PASSWORD') {
            res.send({error: err.error_message});
        }
    }
});

app.post('/remind', upload.none(), async (req, res) => {
    const { email } = req.body;

    try {
        const response = await User.findByEmail(email);

        if (!response.user) {
            throw { error_code: 'EMAIL_NOT_FOUND', error_message: 'Email not found' };
        }

        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}<>?';
        const bytes = crypto.randomBytes(16);
        const password = Array.from(bytes).map(b => charset[b % charset.length]).join('');

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const success = await User.updatePassword(email, hash);
        if (!success) {
            throw { error_code: 'ERROR_CHANGING_PASSWORD', error_message: 'Error changing password' };
        }

        const transporter = nodemailer.createTransport({
            host: 'in-v3.mailjet.com',
            port: 587,
            secure: false,
            auth: {
                user: '8d23261e5b7e89b62fe6a0c76e48f469',
                pass: 'e31955d5a68d1b9d02bfa3c22fe310cf',
            }
        });

        const mailOptions = {
            from: '"Campus" <campusnodemailer@gmail.com>',
            to: email,
            subject: 'Your password',
            text: `Hi! You've seen to have forgotten your password.\nWe've generated a new one for you. Here it is: ${password}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).send();
    }
    catch (err) {
        if (err.error_code === 'EMAIL_NOT_FOUND') {
            res.send({error: err.error_message});
        }
        console.log(err);
    }
});

app.listen(3000, () => {console.log('Server started on http://localhost:3000/')});