import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import xss from 'xss-clean';
import { router as movieRouter } from './routes/movieRouter.js';
import { router as favoriteRouter } from './routes/favoriteRouter.js';
import { initialInsert } from './utils/insertDB.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(xss());

// Fill Database
await initialInsert();

// ROUTES
app.use('/api/v1/movies', movieRouter);
app.use('/api/v1/favorites', favoriteRouter);

app.listen(process.env.PORT, () => console.log('RUNNING'));
