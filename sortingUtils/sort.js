const comparingNumbersFunction = require("./compareNumbers");

module.exports = arrayToSort => {
  const arrayOfNumbers = [];
  const arrayOfStrings = [];

  arrayToSort.forEach(element => {
    if (typeof element == "number") {
      arrayOfNumbers.push(element);
    } else {
      arrayOfStrings.push(element);
    }
  });

  arrayOfNumbers.sort(comparingNumbersFunction);
  arrayOfStrings.sort();

  return arrayOfNumbers.concat(arrayOfStrings);
};
