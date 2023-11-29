const logMiddleware = (req, res, next) => {
  console.log("Method: ", req.method);
  console.log("Requested Url: ", req.url);
  console.log("Timestamp: ", new Date());
  next();
};

export default logMiddleware;
