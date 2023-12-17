import { ObjectId } from 'mongodb';
import { dbo } from '../config/db.js';
import { schema, validateUrlImageExtension } from '../utils/validation.js';

export const getAllMovies = async (req, res) => {
  try {
    const getAllMovies = await dbo.collection('movieDetails').find().sort({ _id: -1 }).toArray();
    res.status(200).json(getAllMovies);
  } catch (error) {
    res.status(500).end();
  }
};

export const getSingleMovie = async (req, res) => {
  const id = req.params.id;

  try {
    const getSingleMovie = await dbo
      .collection('movieDetails')
      .find({ _id: new ObjectId(id) })
      .toArray();

    res.status(200).json(getSingleMovie);
  } catch (error) {
    res.status(500).end();
  }
};

export const saveMovie = async (req, res) => {
  // VALIDATION
  const { error, value } = schema.validate(req.body);

  // CHECK POSTER
  const validatePoster = await validateUrlImageExtension(req.body.poster);
  if (!validatePoster) {
    res
      .status(418)
      .json({ message: 'Validierung fehlgeschlagen, erlaubte Filetypes => jpg, jpeg, png, gif' });
    return;
  }

  if (error) {
    console.log(error);
    res.status(418).json({ message: 'Validierung fehlgeschlagen ' + error.details[0].message });
    return;
  }

  const newMovie = {
    title: value.title,
    year: Number(value.year),
    director: value.director,
    genres: value.genres,
    rated: value.rated,
    poster: value.poster,
    plot: value.plot,
  };

  try {
    const insertMovie = await dbo.collection('movieDetails').insertOne(newMovie);
    console.log(insertMovie);

    if (insertMovie.acknowledged) {
      res.status(201).json(`inserted Movie with ID ${insertMovie.insertedId}`);
      return;
    }

    res.status(500).end();
  } catch (error) {
    console.log(err);
    res.status(500).end();
  }
};

export const editMovie = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };

  // VALIDATION
  const { error, value } = schema.validate(req.body);

  // CHECK POSTER
  const validatePoster = await validateUrlImageExtension(req.body.poster);
  if (!validatePoster) {
    res
      .status(418)
      .json({ message: 'Validierung fehlgeschlagen, erlaubte Filetypes => jpg, jpeg, png, gif' });
    return;
  }

  if (error) {
    res.status(418).json({ message: error.message });
    return;
  }

  const updateMovie = {
    $set: {
      title: value.title,
      year: Number(value.year),
      director: value.director,
      genres: value.genres,
      rated: value.rated,
      poster: value.poster,
      plot: value.plot,
    },
  };

  try {
    const result = await dbo.collection('movieDetails').updateOne(filter, updateMovie);

    if (result.acknowledged) {
      res.status(201).json(`${result.modifiedCount} modified!`);
    }
  } catch (error) {
    console.log(err);
    res.status(500).end();
  }
};

export const deleteMovie = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await dbo.collection('movieDetails').deleteOne({ _id: new ObjectId(id) });
    if (deleted.acknowledged) {
      res.status(201).json(`${deleted.deletedCount} deleted`);
    }
  } catch (error) {
    console.log(err);
    res.status(500).end();
  }
};
