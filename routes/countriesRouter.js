import { Router } from 'express';
import {
  getAllCountries,
  getSingleCountry,
  createCountry,
  updateCountry,
  deleteCountry
} from '../controllers/countries.js';

const countriesRouter = Router();

countriesRouter.route('/').get(getAllCountries).post(createCountry);

countriesRouter.route('/:code').get(getSingleCountry).put(updateCountry).delete(deleteCountry);

export default countriesRouter;
