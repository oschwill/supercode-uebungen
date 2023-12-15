import express from 'express';
import {
  addFavorite,
  deleteFavorite,
  getAllFavorites,
  getSingleFavorite,
} from '../controller/favoriteController.js';
export const router = express.Router();

router.route('/').get(getAllFavorites);
router.route('/:id').get(getSingleFavorite);
router.route('/:id').post(addFavorite);
router.route('/:id').delete(deleteFavorite);
