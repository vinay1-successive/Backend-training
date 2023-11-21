import jwt from "jsonwebtoken";
const secret = "Vinay@1234";

const authToken = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);
  try {
    const user = jwt.verify(token, secret);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send(error.message);
  }
};

export { authToken };
