const errorHandler = (err, req, res, next) => {
  if (!err.status) {
    res.status(503).send("Service Unavailable");
  }

  res.status(err.status).send(err.message);
};
export default errorHandler;
