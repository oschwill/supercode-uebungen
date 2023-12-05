import Joi from 'joi';

// VALIDATION SCHEMA
export const schema = Joi.object({
  firstName: Joi.string().required().min(2).max(20).trim().replace(/\s/g, ''),
  lastName: Joi.string().required().min(2).max(20).trim().truncate().replace(/\s/g, ''),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: ['com', 'net', 'de'] } })
    .trim(),
  content: Joi.string().required().max(1000),
});
