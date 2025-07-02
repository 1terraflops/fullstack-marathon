import express from 'express';
import path from 'path';
import { __dirname, authenticate, redirectToMainPage } from './utils.js';

const pageRouter = express.Router();

pageRouter.get('/', authenticate, (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

pageRouter.get('/logout.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/scripts/logout.js'));
});

pageRouter.get('/registration', redirectToMainPage, (req, res) => {
    res.sendFile(path.join(__dirname, '/views/registration.html'));
});

pageRouter.get('/registration.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/scripts/registration.js'));
});

pageRouter.get('/login', redirectToMainPage, (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

pageRouter.get('/login.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/scripts/login.js'));
});

pageRouter.get('/remind_password', redirectToMainPage, (req, res) => {
    res.sendFile(path.join(__dirname, '/views/remind_password.html'));
});

pageRouter.get('/remind_password.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/scripts/remind_password.js'));
});

export default pageRouter;