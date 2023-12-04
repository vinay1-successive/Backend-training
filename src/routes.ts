import express from "express";
import {
  dataRouter,
  loginRouter,
  dynamicLoginRouter,
  asyncDataRouter,
  cookieRouter,
} from "./routes/index.js";
const router = express.Router();

router.use("/user", dynamicLoginRouter);
router.use("/login", loginRouter);
router.use("/data", dataRouter);
router.use("/asyncData", asyncDataRouter);
router.use("/cookie", cookieRouter);

export default router;
