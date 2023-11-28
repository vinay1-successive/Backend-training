import jwt from "jsonwebtoken";
const secret = "Vinay@1234";

const setUser = (req, res) => {
  
  const user=req.body;
  const token = jwt.sign(user, secret, { expiresIn: "300s" });
  res.json({ token });
};

export { setUser };
