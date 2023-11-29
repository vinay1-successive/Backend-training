import jwt from "jsonwebtoken";
const secret = "Vinay@1234";

const login = (req, res) => {
  res.send(`${req.user.username} Logged In`);
};

const register = (req, res) => {
  res.send("User Registerd Successfully");
};

export { login, register };
