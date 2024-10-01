const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, current) => total * current);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let arr = [];
  for (let index = a; index > 0; index--) {
    arr.push(index);
  }
  return arr.reduce((total, current) => total * current,1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
