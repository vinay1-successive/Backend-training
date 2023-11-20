import jwt from "jsonwebtoken";
const secret = "Vinay@1234";

const setUser = (req, res) => {
  const user = { id: 1, name: "Vinay" };

  const token = jwt.sign(user, secret, { expiresIn: "1h" });
  res.json({ token });
};

export { setUser };
