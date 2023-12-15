import express from 'express';
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });

import {
  deleteMovie,
  editMovie,
  getAllMovies,
  getSingleMovie,
  saveMovie,
} from '../controller/movieController.js';
export const router = express.Router();

// getALL
router.route('/').get(getAllMovies);
// getSingle Movie
router.route('/:id').get(getSingleMovie);
// save Movie
router.route('/').post(upload.none(), saveMovie);
// edit Movie
router.route('/:id').put(upload.none(), editMovie);
// delete Movie
router.route('/:id').delete(deleteMovie);
