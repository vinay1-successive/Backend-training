import jwt from "jsonwebtoken";
const secret = "Vinay@1234";

const authToken = (req, res, next) => {
  try {
    const bearer = req.headers["authorization"].split(" ")[0];
    if (bearer !== "bearer") {
      throw new Error();
    }
    const token = req.headers["authorization"].split(" ")[1];
    const user = jwt.verify(token, secret);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};

export { authToken };
