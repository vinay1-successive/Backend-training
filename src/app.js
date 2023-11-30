import express from "express";
import cookieParser from "cookie-parser";
import arr from "./utils/mockData.js";
import { dataRouter } from "./routes/index.js";
import { loginRouter } from "./routes/index.js";
import errorHandler from "./middleware/errorMiddleware.js";
import createError from "http-errors";
import headerMiddleware from "./middleware/headerMiddleware.js";
import limitMiddleWare from "./middleware/limitMiddleWare.js";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(morgan(":method :url :date[clf]"));
app.use(headerMiddleware({ CustomKey1: "CustomValue1" }));
app.use(limitMiddleWare);
app.use(cookieParser());

app.use("/login", loginRouter);
app.use("/data", dataRouter);

app.get("/", (req, res) => {
  res.send(arr);
});

app.get("/setValue", (req, res) => {
  res.cookie("name", "Vinay").send("Done");
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
