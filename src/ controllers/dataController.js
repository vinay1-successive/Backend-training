import arr from "../utils/mockData.js";
const getData = (req, res) => {
  console.log(req.user);
  res.json(arr);
};

const putData = (req, res) => {
  const newD = req.body;
  arr.push(newD);
  res.send(arr);
};
export { getData, putData };
