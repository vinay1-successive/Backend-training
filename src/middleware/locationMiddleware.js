const locationMiddleware = (req, res, next) => {
  if (req.ip !== "::1") {
    res.status(403).send("Forrbidden");
  }
  console.log("Done!!");
  next();
};

export default locationMiddleware;
