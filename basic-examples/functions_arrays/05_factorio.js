'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(number) {
  if (n === 0) {
    return 1;
  }
  else {
    let i = number -1;
    while (i > 0) {
      number *= i;
      i--;
    }
    return number;
  }
}
console.log(factorio(3));