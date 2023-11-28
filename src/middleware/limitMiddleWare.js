const limit = 4;
let count = 0;
const window = 10;

const limitMiddleWare = (req, res, next) => {
  if (count >= limit) {
    return res.status(429).send("Too Many Requests");
  } else {
    count++;
  }
  if (count === 1) {
    setTimeout(() => {
      count = 0;
    }, 1000 * window);
  }
  next();
};

export default limitMiddleWare;
