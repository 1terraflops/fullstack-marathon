import express from 'express';
import multer from 'multer';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/user.js';

const secret = process.env.JWT_SECRET || 'mystrongsecretkey';

const app = express();
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.listen(3000, () => {console.log('Server started on http://localhost:3000/')});