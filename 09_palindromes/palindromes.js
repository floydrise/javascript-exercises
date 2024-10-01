const palindromes = function (word) {
    const cleanedStr = word.replace(/[^0-9a-z]/gi, '').toLowerCase();
    const reverseStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reverseStr;
}

// Do not edit below this line
module.exports = palindromes;
