import Joi from 'joi';

export const schema = Joi.object({
  title: Joi.string().max(50).required(),
  year: Joi.number(),
  director: Joi.string().required(),
  genres: Joi.array().required(),
  rated: Joi.string().max(10).required(),
  poster: Joi.string(),
  description: Joi.string().max(1000),
}).with('title', 'year');
