'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(n) {
  if(n == 0) {
      return 1
  } else {
      return n * factorio(n - 1);
  }
}
console.log(factorio(5));