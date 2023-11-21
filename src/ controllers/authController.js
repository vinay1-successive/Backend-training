import jwt from "jsonwebtoken";
const secret = "Vinay@1234";

const setUser = (req, res) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, secret, { expiresIn: "300s" });
    res.json({ token });
  } catch (error) {
    res.status(400).send("Bad Request");
  }
};

export { setUser };
