import Joi from 'joi';

export const countrySchema = Joi.object({
  name: Joi.string().required(),
  alpha2Code: Joi.string().required(),
  alpha3Code: Joi.string().required()
});
