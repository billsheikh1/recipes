import express from 'express';
import dotenv from 'dotenv';
import dataJson from './data.json';
import cors from 'cors';

dotenv.config();

const app = express();
const port = '8080';

app.use(cors());

app.get('/', (req, res) => {
    res.json(dataJson);
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
