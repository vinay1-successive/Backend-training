import arr from "../utils/mockData.js";
const getData = (req, res) => {
  try {
    res.json(arr);
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};

const getDataByParameter = (req, res) => {
  try {
    if (isNaN(req.params.id)) {
      return res.status(401).json({ error: "Invalid Id" });
    }
    res.json(req.params);
  } catch (error) {
    return res.status(401).json({ error: "Data not received" });
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
export { getData, putData, getDataByParameter };
