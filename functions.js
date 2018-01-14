// Functions:
  // Generally speaking, a function is a "subprogram"
  // that can be called by code external (or internal in the case of recursion) to the function.
  // Every function in JavaScript is a Function object!!!
  // For all other functions, the default return value is undefined!!!
  // The parameters of a function call are the function's arguments.
  
  // The function declaration:
  function myFunc(theObject) {
    return theObject.brand;
  }

  var myCar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
  };

  console.log(myFunc(myCar)); // Honda

  // The function expression:
  
  var myFunction = function(number) {
    return number < 6;
  }

  console.log(myFunction(8)); // false

  // Multiple arguments:

  function multiArg() {
    console.log(arguments[1])
  }
 multiArg('one', 'two', 'three'); // two

 // callback:
  // A callback function is a function passed into another function as an argument

  function greeting(name) {
    console.log('Hello ' + name);
  }

  function processUserInput(callback) {
    var name = 'Attila';
    callback(name);
  }

  processUserInput(greeting);
  // The above example is a synchronous callback, as it is executed immediately.

  // Asynchronous code:

  console.log('1');
  setTimeout(function afterTwoSeconds() {
    console.log('2');
  }, 2000)
  console.log('3');
  
// Closures:
  // A closure is the combination of a function and the lexical environment
  // within which that function was declared.
  // A closure gives you access to an outer function’s scope from an inner function.
  // In JavaScript, closures are created every time a function is created, at function creation time.
  // To use a closure, simply define a function inside another function and expose it.
  // To expose a function, return it or pass it to another function.

  function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();