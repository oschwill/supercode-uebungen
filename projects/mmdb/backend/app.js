import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import xss from 'xss-clean';
import { rateLimit } from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';

import { router as movieRouter } from './routes/movieRouter.js';
import { router as favoriteRouter } from './routes/favoriteRouter.js';
import { initialInsert } from './utils/insertDB.js';
import { AppError } from './utils/appError.js';

/**
 * MÖGLICHER WEITERER SCHUTZ: hpp poluttion und secure HTTP Header....
 */

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50kb' })); // limitieren die Requestgröße
app.use(xss()); // Schutz vor xss Attacken
// maximal 50 request pro Stunde von einer IP Adresse erlauben
const limiter = rateLimit({
  max: 50,
  windowMs: 60 * 60 * 1000, //1 Stunde
  message: 'Too many requests from this IP, please try again in an hour!',
});

// Data sanitization against NoSQL query injection
//entfernt object keys die mit $ beginnen oder einen Punkt beinhalten um Operatoren zu verhindern
app.use(mongoSanitize());

// Fill Database
await initialInsert();

// ROUTES
app.use('/api/v1', limiter); // wird auf allen Routen angewendet!
app.use('/api/v1/movies', movieRouter);
app.use('/api/v1/favorites', favoriteRouter);

// unhandled Routes
app.all('*', (req, res, next) => {
  // mit next springen wir zur nächsten middleware
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});

app.listen(process.env.PORT, () => console.log('RUNNING'));
