const sumAll = function(val1, val2) {
    if (!(Number.isInteger(val1) && Number.isInteger(val2))) return "ERROR";
    if (val1 < 0 || val2 < 0) return "ERROR";
    let sum = 0;
    let initialVal = 0;
    let finalVal = 0;
    if (val1 > val2) {
        finalVal = val1;
    } else {
        finalVal = val2;
    }
    for (let index = initialVal; index <= finalVal; index++) {
        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
