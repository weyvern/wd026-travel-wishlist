import { Router } from 'express';
import {
  getAllCountries,
  getSingleCountry,
  createCountry,
  updateCountry,
  deleteCountry
} from '../controllers/countries.js';
import validateJOI from '../middlewares/validateJOI.js';
import { countrySchema } from '../joi/schemas.js';
import checkCountryExistence from '../middlewares/checkCountryExistence.js';

const countriesRouter = Router();

countriesRouter.route('/').get(getAllCountries).post(validateJOI(countrySchema), createCountry);

countriesRouter
  .route('/:code')
  .get(getSingleCountry)
  .put(validateJOI(countrySchema), updateCountry)
  .delete(deleteCountry);

export default countriesRouter;
