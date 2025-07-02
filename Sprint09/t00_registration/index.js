import express from 'express';
import multer from 'multer';
import bcrypt from 'bcrypt';
import User from './models/user.js';

const app = express();
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', upload.none(), async (req, res) => {
    const { login, password, confirm_pass, fullname, email_address } = req.body;

    if (password !== confirm_pass) {
        return res.send({error: 'Passwords do not match'});
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    try {
        const response = await User.save(login, hash, fullname, email_address);

        if (response.error_code) {
            throw new Error(response.error_message);
        }

        res.status(200).send();
    }
    catch (err) {
        if (err.error_code === 'USER_EXISTS') {
            res.send({error: err.error_message});
        }
        else if (err.error_code === 'EMAIL_EXISTS') {
            res.send({error: err.error_message});
        }
    }
});

app.listen(3000, () => {console.log('Server started on http://localhost:3000/')});