import express from "express";
import cookieParser from "cookie-parser";
import arr from "./mockData.js";
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(arr);
});

app.get("/setValue", (req, res) => {
  res.cookie("name", "Vinay").send("Done");
});

app.get("/checkValue", (req, res) => {
  const value = req.cookies.name;
  if (value) {
    res.send(value);
  } else {
    res.send("error");
  }
});
app.listen(3000, () => {
  console.log("Server Started");
});
