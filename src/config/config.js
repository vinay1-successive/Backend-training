import { config } from "dotenv";

config();

const configuration=Object.freeze({
    secret:process.env.SECRET || "abce12345@7216542@211231"
})

export default configuration