import schema from "../utils/Schemas.js";
const dynamicValidation = (req, res, next) => {
  const url = req.url.split("/")[1];
  const user = req.body;
  const validateFun = schema.login;
  const { error, value } = validateFun.validate(user);
  if (error) {
    return res.status(401).send("Unauthorized");
  }
  req.user = value;
  next();
};

export default dynamicValidation;
