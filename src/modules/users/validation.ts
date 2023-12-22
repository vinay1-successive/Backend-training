import Joi from "joi";
const regexPassword: string = "^[a-zA-Z0-9]{3,30}$";
const regexPhone: string = "^[0-9]{10}$";

const UserValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  password: Joi.string().regex(new RegExp(regexPassword)),
  email: Joi.string().required(),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
  }),
  phone: Joi.string().regex(new RegExp(regexPhone)),
});

export default UserValidationSchema;
