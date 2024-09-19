const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let returnValue = "";
    for (let index = 0; index < num; index++) {
        returnValue += string;
    }
    return returnValue;
};

// Do not edit below this line
module.exports = repeatString;
