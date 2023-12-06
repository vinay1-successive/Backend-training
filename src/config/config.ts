import { config } from "dotenv";

config();

const configuration = Object.freeze({
  secret: process.env.SECRET || "abce12345@7216542@211231",
  port: process.env.PORT || 3000,
});

export default configuration;
