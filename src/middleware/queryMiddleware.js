const queryMiddleware = (req, res, next) => {
    const value = req.query;
    if(!Number(value.name))
    {
      
      return res.status(422).send("Invalid Query");
    }
    next();
  };
  
  export default queryMiddleware;
  