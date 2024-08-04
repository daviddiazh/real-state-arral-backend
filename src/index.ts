import express from 'express';
import cors from 'cors';

import * as dotenv from 'dotenv'
dotenv.config()

import estatesController from './controller';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', estatesController);

app.get('/', (req, res) => {
    res.send('Welcome to the Arrendamientos Álvarez API!');
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Listen to port ' + PORT)
});
