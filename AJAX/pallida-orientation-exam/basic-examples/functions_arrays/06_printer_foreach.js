'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer() {
  const args = Array.from(arguments);
  args.forEach(function(element) {
    console.log(element);
  });
}

printer("hello", "bello");