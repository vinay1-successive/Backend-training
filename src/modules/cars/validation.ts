import Joi from "joi";

const CarValidationSchema = Joi.object({
  brand: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number().required(),
  color: Joi.string().required(),
  fuelType: Joi.string().required(),
  forSale: Joi.boolean().required(),
  transmission: Joi.string().required(),
  engine: Joi.object({
    type: Joi.string().required(),
    displacement: Joi.number().required(),
    horsepower: Joi.number().required(),
  }),
  features: Joi.array().items(Joi.string()),
  owners: Joi.array().items(
    Joi.object({
      name: Joi.string(),
      contact: Joi.string(),
      purchaseDate: Joi.string(),
    }),
  ),
  registration: Joi.object({
    plateNumber: Joi.string().required(),
    state: Joi.string().required(),
    expiryDate: Joi.string().required(),
  }),
  imageUrl: Joi.string(),
});

export default CarValidationSchema;
