import arr from "../utils/mockData.js";
const getData = (req, res) => {
  try {
    console.log(req.user);
    res.json(arr);
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};

const putData = (req, res) => {
  try {
    const newD = req.body;
    arr.push(newD);
    res.send(arr);
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};
export { getData, putData };
