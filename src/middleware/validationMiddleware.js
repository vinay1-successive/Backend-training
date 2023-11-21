import userSchema from "../utils/userSchema.js";

const validate = (req, res, next) => {
  const user = req.body;
  const { error, value } = userSchema.validate(user);
  if (error) {
    return res.status(422).send("Unprocessable Entity");
  }
  next();
};

export default validate;
