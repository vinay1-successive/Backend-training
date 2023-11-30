import express from "express";
import cookieParser from "cookie-parser";
import arr from "./utils/mockData.js";
import { dataRouter, loginRouter, dynamicLoginRouter,asyncDataRouter } from "./routes/index.js";
import {
  errorHandler,
  headerMiddleware,
  limitMiddleWare,
} from "./middleware/index.js";
import createError from "http-errors";
import morgan from "morgan";
const app = express();
const port = process.env.PORT || 3021;

app.use(express.json());
app.use(morgan(":method :url :date[clf]"));
app.use(headerMiddleware({ CustomKey1: "CustomValue1" }));
app.use(limitMiddleWare);
app.use(cookieParser());

app.use("/user", dynamicLoginRouter);
app.use("/login", loginRouter);
app.use("/data", dataRouter);
app.use("/asyncData",asyncDataRouter);

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
  try {
    const value = req.cookies.name;
    if (!value) {
      throw new Error();
    }
    res.send(value);
  } catch (error) {
    return res.status(401).send("Cookie not set");
  }
});

app.use((req, res, next) => {
  next(createError(404, "Not Found"));
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Started at ${port}`);
});
