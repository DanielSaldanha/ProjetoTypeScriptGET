
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

app.use(express.json());

// Rotas
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});

export default app;
