import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// middlewares 
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send('hello from dalle');
})

const startServer = async () => {
    app.listen(8080,()=> console.log('server started'))
}