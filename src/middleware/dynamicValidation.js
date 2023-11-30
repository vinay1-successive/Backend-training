import schema from "../utils/Schemas.js";
const dynamicValidation = (req, res, next) => {
  try {
    const url = req.url.split("/")[1];
    const user = req.body;
    const validateFun = schema[url];
    const { error, value } = validateFun.validate(user, { abortEarly: false });
    if (error) {
      throw error;
    }
    req.user = value;
    next();
  } catch (error) {
    return res.status(422).send(error.details);
  }
};

export default dynamicValidation;
