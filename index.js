import { argv } from "node:process";
import { sum, sub, mul, div } from "./lib/math.js";
import fs from "fs";
const AddData = (val1, val2) => {
  const data = [
    ["Operation", "Value1", "Value2", "Result"],
    ["Addition", val1, val2, sum(val1, val2)],
    ["Subtraction", val1, val2, sub(val1, val2)],
    ["Multiplication", val1, val2, mul(val1, val2)],
    ["Division", val1, val2, div(val1, val2)],
  ];

  const DataStirng = data.reduce((val, item) => val + "\n" + item);
  console.log(DataStirng);
  fs.appendFile("data.csv", DataStirng + "\n\n", "utf-8", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Data Saved");
    }
  });
};

AddData(argv[2], argv[3]);
