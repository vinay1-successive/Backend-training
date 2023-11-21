import lodash from "lodash";

const sum = (val1, val2) => {
  return lodash.add(val1, val2);
};
const sub = (val1, val2) => {
  return lodash.subtract(val1, val2);
};
const mul = (val1, val2) => {
  return lodash.multiply(val1, val2);
};
const div = (val1, val2) => {
  return lodash.divide(val1, val2);
};

export { sum, sub, mul, div };
