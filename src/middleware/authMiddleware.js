import jwt from "jsonwebtoken";
import configuration from "../config/config.js";
const authToken = (req, res, next) => {
  try {
    const bearer = req.headers["authorization"].split(" ")[0];
    if (bearer !== "bearer") {
      throw new Error();
    }
    const token = req.headers["authorization"].split(" ")[1];
    console.log(token);
    const user = jwt.verify(token, configuration.secret);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};

export { authToken };
