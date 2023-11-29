import arr from "../utils/mockData.js";

async function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
const asyncDataFun = async (req, res) => {
  try {
    const newD = req.body;
    arr.push(newD);
    await wait(3000);
    throw new Error()
  } catch (error) {
    return res.status(402).send("Something went wrong");
  }
};
export default asyncDataFun;
