const comparingNumbersFunction = require("./compareNumbers");

module.exports = arrayToSort => {

  const arrayOfNumbers = arrayToSort.filter(e=>typeof e == 'number');
  const arrayOfStrings = arrayToSort.filter(e=>typeof e == 'string');

  arrayOfNumbers.sort(comparingNumbersFunction);
  arrayOfStrings.sort();

  return arrayOfNumbers.concat(arrayOfStrings);
};
