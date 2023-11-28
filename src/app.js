import express from "express";
import cookieParser from "cookie-parser";
import arr from "./utils/mockData.js";
import { dataRouter, loginRouter, dynamicLoginRouter } from "./routes/index.js";
import {
  logMiddleware,
  errorHandler,
  headerMiddleware,
  limitMiddleWare,
} from "./middleware/index.js";
import createError from "http-errors";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(headerMiddleware({ CustomKey1: "CustomValue1" }));
app.use(limitMiddleWare);
app.use(cookieParser());
app.use(logMiddleware);

app.use("/user", dynamicLoginRouter);
app.use("/login", loginRouter);
app.use("/data", dataRouter);

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

app.use((req, res, next) => {
  next(createError(404, "Not Found"));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Started at ${port}`);
});
