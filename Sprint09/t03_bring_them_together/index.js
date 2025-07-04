import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import path from 'path';
import { __dirname } from "./utils.js";
import pageRouter from './pageRouter.js';
import apiRouter from './apiRouter.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());

app.use('/', pageRouter);
app.use('/api/', apiRouter);
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/views/404-page.html'));
});

app.listen(PORT, () => {console.log(`Server started on http://localhost:${PORT}/`)});