import Country from '../models/Country.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllCountries = asyncHandler(async (req, res) => {
  const countries = await Country.find();
  res.json(countries);
});

export const createCountry = asyncHandler(async (req, res) => {
  const found = await Country.findOne({
    $or: [{ alpha2Code: req.body.alpha2Code }, { alpha3Code: req.body.alpha3Code }]
  });
  if (found) throw new ErrorResponse(`The country already exits`, 403);
  const newCountry = await Country.create(req.body);
  res.status(201).json(newCountry);
});

export const getSingleCountry = (req, res) => res.send('GET single country');

export const updateCountry = (req, res) => res.send('UPDATE single country');

export const deleteCountry = (req, res) => res.send('DELETE single country');
