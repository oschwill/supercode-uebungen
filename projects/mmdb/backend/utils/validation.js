import Joi from 'joi';
import got from 'got';
import { fileTypeFromStream } from 'file-type';

export const schema = Joi.object({
  title: Joi.string().max(50).required(),
  year: Joi.number(),
  director: Joi.string().required(),
  genres: Joi.array().required(),
  rated: Joi.string().max(10).required(),
  poster: Joi.string(),
  plot: Joi.string().max(1000),
}).with('title', 'year');

export const validateUrlImageExtension = async (image) => {
  const posterUrl = image;
  const stream = got.stream(posterUrl);

  try {
    // überprüfe url file extension
    const extension = await fileTypeFromStream(stream);

    // überprüfe nochmals ob korrekte extension
    const validateFileType = ['jpg', 'jpeg', 'png', 'gif'].filter((cur) => cur === extension.ext);

    if (validateFileType.length === 0) {
      return false;
    }
  } catch (error) {
    return false;
  }

  return true;
};
