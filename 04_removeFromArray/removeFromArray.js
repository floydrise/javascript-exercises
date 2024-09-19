const removeFromArray = function(arr, ...arg) {
    arg.forEach(element => {
        arr = arr.filter(item => item !== element);
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;