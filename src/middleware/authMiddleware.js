import jwt from "jsonwebtoken";
const secret = "Vinay@1234";
import userSchema from "../utils/userSchema.js";

const authToken = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);
  try {
    const user = jwt.verify(token, secret);
    const { error, value } = userSchema.validate(user);
    if (error) {
      return res.sendStatus(401);
    }
    console.log(value);
    req.user = value;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

export { authToken };
