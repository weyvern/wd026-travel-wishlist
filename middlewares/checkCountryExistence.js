import Country from '../models/Country.js';

const checkCountryExistence = async (req, res, next) => {
  const { body, params } = req;
  const found = await Country.findOne({
    $or: [{ alpha2Code: code1.toUpperCase() }, { alpha3Code: code2.toUpperCase() }]
  });
  req.country = found;
  next();
};

export default checkCountryExistence;
