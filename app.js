const sort = require("./sortingUtils/sort");

const arrToSort = [6, "a", 1, "asd", 32];
console.log("Array before sorting:");
console.log(arrToSort);
const result = sort(arrToSort);
console.log("Array after sorting:");
console.log(result);
