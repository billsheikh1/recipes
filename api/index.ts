import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = '8080';

app.get('/', (req, res) => {
    res.send(`Express + Server`);
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
