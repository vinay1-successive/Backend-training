const headerMiddleware = (Custom_Header) => {
  return (req, res, next) => {
    res.set(Custom_Header);
    console.log(res.getHeaders());
    next();
  };
};

export default headerMiddleware;
