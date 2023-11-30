const queryMiddleware = (req, res, next) => {
  try {
    const value = req.query;
    if (!Number(value.name)) {
      throw "Invalid Query!";
    }
    next();
  } catch (error) {
    return res.status(422).send(error);
  }
};

export default queryMiddleware;
