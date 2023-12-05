import Joi, { type ObjectSchema } from "joi";
const regex: string = "^[a-zA-Z0-9]{3,30}$";
type validateConfig = Record<string, ObjectSchema<any>>;
const schema: validateConfig = {
  login: Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp(regex)).required(),
  }),

  register: Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp(regex)).required(),
  }),
};

export default schema;
