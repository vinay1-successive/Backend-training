import express from "express";
import cookieParser from "cookie-parser";
import arr from "./utils/mockData.js";
import createError from "http-errors";
import { dataRouter } from "./routes/index.js";
import { loginRouter } from "./routes/index.js";
import errorHandler from "./middleware/errorMiddleware.js";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());

app.use("/login", loginRouter);
app.use("/data", dataRouter);

app.get("/", (req, res) => {
  try {
    res.send(arr);
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
});

app.get("/setValue", (req, res) => {
  try {
    res.cookie("name", "Vinay").send("Done");
  } catch (error) {
    res.send(error);
  }
});

app.get("/checkValue", (req, res) => {
  const value = req.cookies.name;
  if (value) {
    res.send(value);
  } else {
    res.status(403).send("Value not set");
  }
});

app.use((req, res, next) => {
  next(createError(404,"Not Found"));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Started at ${port}`);
});
