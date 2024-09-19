const convertToCelsius = function(degrees) {
  // (°F - 32) ÷ 1.8 
  let cels = ((degrees - 32) / 1.8);
  if (Number.isInteger(cels)) {
    return cels;
  }
  return parseFloat(cels.toFixed(1));
};

const convertToFahrenheit = function(degrees) {
  // °C * 1.8 + 32 
  let faren = (degrees * 1.8 + 32);
  if (Number.isInteger(faren)) {
    return faren;
  }
  return parseFloat(faren.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
