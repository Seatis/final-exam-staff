'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a 'numChecker' function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

var listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 32];

function numChecker(numList) {
  let containsFlag = true;
  let numbers = [4, 8, 12, 16];
  numbers.forEach(function(item) {
    if (!numList.includes(item)) {
      containsFlag = false;
    }
  });
  return containsFlag;
}

console.log(numChecker(listOfNumbers));