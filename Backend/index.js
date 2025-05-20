import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './Routes/usuariosR.js';
import { obtenerPrecios } from './scraper.js';

 

dotenv.config();

const app = express();

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use('/auth', userRouter);
app.use('/api', userRouter);

app.get('/api/precios', async (req, res) => {
    const datos = await obtenerPrecios();
    res.json(datos);
});

app.listen(3000, () => {
    console.log('🚀 Servidor en funcionamiento en http://localhost:3000');
});