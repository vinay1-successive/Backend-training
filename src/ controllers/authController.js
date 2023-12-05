import jwt from "jsonwebtoken";
import configuration from "../config/config.js";

const setUser = (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    if (!Object.keys(user).length) {
      throw new Error();
    }
    const token = jwt.sign(user, configuration.secret, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    return res.status(422).send("Unprocessable entry");
  }
};

export { setUser };
