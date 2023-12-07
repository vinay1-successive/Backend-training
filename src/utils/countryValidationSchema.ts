import Joi from "joi";
const countryValidationSchmea = Joi.object({
  country: Joi.string().min(3).max(30).required(),

  captain: Joi.string().min(3).max(30).required(),

  playersName: Joi.array().length(15).required(),
});

export default countryValidationSchmea;
