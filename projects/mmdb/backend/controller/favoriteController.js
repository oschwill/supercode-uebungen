import { ObjectId } from 'mongodb';
import { dbo } from '../config/db.js';

export const getAllFavorites = async (req, res) => {
  try {
    const getAllFavoritesIDs = await dbo
      .collection('favorites')
      .find({}, { movieId: 1, _id: 0 })
      .toArray();

    const favArr = getAllFavoritesIDs.map((item) => item.movieId);

    const getMovieFavorites = await dbo
      .collection('movieDetails')
      .find({ _id: { $in: favArr } })
      .toArray();

    res.status(200).json(getMovieFavorites);
  } catch (error) {
    res.status(500).end();
  }
};

export const getSingleFavorite = async (req, res) => {
  const id = req.params.id;

  try {
    const getSingleMovie = await dbo
      .collection('favorites')
      .find({ movieId: new ObjectId(id) })
      .toArray();

    res.status(200).json(getSingleMovie.length > 0 ? getSingleMovie : null);
  } catch (error) {
    res.status(500).end();
  }
};

export const addFavorite = async (req, res) => {
  const id = req.params.id;
  try {
    const getMovie = await dbo.collection('movieDetails').findOne({ _id: new ObjectId(id) });

    if (getMovie) {
      dbo.collection('favorites').updateOne(
        { movieId: getMovie._id },
        {
          $setOnInsert: { movieId: getMovie._id },
        },
        { upsert: true }
      );
      console.log('first');
      res.status(201).json({ getMovie });
      return;
    }
    throw new Error('NO MOVIE FOUND!!!!!!!!!!');
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
  //
};

export const deleteFavorite = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await dbo.collection('favorites').deleteOne({ movieId: new ObjectId(id) });
    if (deleted.acknowledged) {
      res.status(201).json(`${deleted.deletedCount} deleted`);
    }
  } catch (error) {
    console.log(err);
    res.status(500).end();
  }
};
