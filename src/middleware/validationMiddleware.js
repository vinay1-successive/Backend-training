import userSchema from "../utils/userSchema.js";

const validate = (req, res, next) => {
  try {
    const user = req.body;
    const { error, value } = userSchema.validate(user, { abortEarly: false });
    if (error) {
      throw error;
    }
    next();
  } catch (error) {
    return res.status(422).json(error.details);
  }
};

export default validate;
