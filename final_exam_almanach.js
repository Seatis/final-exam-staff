// COMMAND LINE
// more info and git:
// https://www.codeproject.com/Articles/457305/Basic-Git-Command-Line-Reference-for-Windows-Users
// List the contents of the current directory:
  // $ ls
    // - a: Show Everything, including hidden items
    // - 1: List 1 item per line
    // - d: list only directories
    // - r: Reverse the sort order
    // - l: Use a long listing format
  // Create a New Directory:
    // $ mkdir NewFolderName
    // $ mkdir /c/ExistingParentFolder/NewFolderName
  // Create Files:
    // $ touch newFile.txt
    // $ touch /c/SomeFolder/newFile.txt
  // Append text to a file. If the file does not exist, one is created: 
    // $ echo "This text is added to the end of the file" >> newFile.txt
  // Remove Files:
    // $ rm DeleteFileName
  // Remove Directories:
    // $ rm -rf DeleteFolderName (Removes the specified folder and all contents)
  // Moving files:
    // $ mv hello.html /c/TargetFolder
  // Renaming files:
    // $ mv oldFileName.html newFileName.html

// GIT - very basic commands:
  // Configure Git (git config):
    // git config --global user.name "FirstName LastName"
    // git config --global user.email UserEmailAddress
  // Initialize a New Git Repo:
    // git init
  // Add/Stage for Commit (git add):
    // git add
      // -A: Add all changes in the working directory to the next commit, including new files and deletions
      //  .: Add all changes to tracked files and all new files to the next commit, but do not add file deletions
      // -u: adds all changes to tracked files and all file removals to the next commit, but does not add new files
      // -p: Walks through changed files and prompts user for add option. Does not include new files
  // Unstage from Commit (git reset):
    // git reset HEAD FileName
  // Committing Changes (git commit):
    // git commit FileName –m "Message Text"
      // (If you do not provide one using the -m option, you will be prompted to do so before the commit is performed.)
      // -a: Commit all changes to tracked files since last commit
      // -v: Verbose: include the diffs of committed items in the commit message screen
  // Pushing to Remote Repositories (git push):
    // git push
    // git push RemoteName BranchName
  // Pulling from Remote Repositories (git pull) 
    // git pull
    // git pull RemoteName/BranchName


// JavaScript Datatypes
  // JavaScript allows you to work with three primitive data types:
    // Numbers:
      var number = 175.89;
      // JavaScript does not make a distinction between integer values and floating-point values.
      // All numbers in JavaScript are represented as floating-point values!!!!!
    // Strings:
      var string = "This is a string";
    // Boolean:
      var boolean = true;
  //JavaScript also defines two trivial data types, null and undefined:
    var myNull = null;
    var myNothing = undefined;
  // JavaScript supports a composite data type known as object:
    var myObj = Object; // -- later

// JavaScript Variables:
  // Before you use a variable in a JavaScript program,
  // you must declare it!!
    var name; // this is declaration
    var money, car;  // this is multiple variable declaration
    var age = 31; // this is variable initialization, storing a value in a variable
    name = 'JSmaster'; //  you can assign the value later (if it is declared)
  // JavaScript is untyped language!! 
  // You don't have to tell JavaScript during variable declaration
  // what type of value the variable will hold.

  // var, let or const:
    // var: standard variable declaration
    // let (ES6+): block scope local variable:
        let x = 1;
        if (x === 1) {
          let x = 2;
          console.log(x); // expected output: 2
        }
        console.log(x); // expected output: 1
    // const (ES6+): block-scoped declaration, that means
        // The value of a constant cannot change through re-assignment,
        // and it can't be redeclared.

// JavaScript Variable Scope:
  // The scope of a variable is the region of your program in which it is defined.
  // JavaScript variables have only two scopes:
    // GLOBAL Variables:
      // A global variable has global scope which means it can be defined anywhere in your JavaScript code.
    // LOCAL Variables:
      // A local variable will be visible only within a function where it is defined.
      // Function parameters are always local to that function!!
      // If you declare a local variable or function parameter with the same name as a global variable,
      // you effectively hide the global variable. 
      // Take a look into the following example:
      var myVar = "global"; // Declare a global variable
      function checkscope() {
        var myVar = "local";  // Declare a local variable
        console.log(myVar);   // The output is: local 
      }

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

// What is strict mode?? "use strict"
  // It is a directive, that the code should be executed in "strict mode".
  // With strict mode, you can not use undeclared variables!!
  // Without strict mode:
    myName = 'Attila'; // this variable will be declared automatically Global
    // or, let see this:
    myFunction();
    // code here can use carName, because it will be global, even if the value is assigned inside a function!
    function myFunction() {
        carName = "Volvo";
    }
  
  // With "use strict":
    myName = 'Attila';  // This will cause an error because myName is not declared!!

  // So Strict mode makes it easier to write "secure" JavaScript. That's it! :)

// LOOPS LOOPS LOOPS LOOPS LOOPS LOOPS

      var myArray = ["BMW", "Audi", "Mercedes", "Porsche", "Trabant"];
      // FOR LOOP:
      for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
      }
      
      // WHILE LOOP:
      let i = 0;
      while (i < myArray.length) {
        console.log(myArray[i]);
        i++;
      }

      // ForEach LOOP:
      myArray.forEach(function(element, index, array) {
        console.log(element);
      });
      // index is the index of the current element,
      // array represents the whole array

// Arrays:

  // How to declare it:
      let newArray = ["green", 6, "blue", false];
      let newArray_2 = new Array("green", 6, "blue", false);
      let cars = [];

  // Push: adds one or more elements to the end of an array and returns the new length of the array.
      let colors = ["green", "yellow", "red", "white"];
      colors.push("blue");  // it returns with 5
      console.log(colors);

  // Pop: removes the last element from an array and returns that element. 
      colors.pop();   // it returns with "blue"
      console.log(colors);
  
  // Shift: removes the first element from an array and returns that removed element.
    var a = [1, 2, 3];
    var b = a.shift();
    console.log(a); // [2, 3]
    console.log(b); // 1

  // Unshift: adds one or more elements to the beginning of an array and returns the new length of the array.
    var a = [1, 2, 3];
    a.unshift(4, 5);
    console.log(a); // [4, 5, 1, 2, 3]

  // Splice: changes the contents of an array by removing existing elements and/or adding new elements.
    var woman = ["Carol", "Cherry", "Jody", "Lilly", "Shelley"];

    // Remove 0 elements from index 2, and insert "drum":
    var removed = woman.splice(2, 0, 'Adele');
      // woman is ["Carol", "Cherry", "Adele", "Jody", "Lilly", "Shelley"]
      // removed is [], no elements removed
    
    // Remove 1 element from index 3:
    var removed = woman.splice(3, 1);
      // removed is ["Lilly"]
      // woman is ["Carol", "Cherry", "Adele", "Jody", "Shelley"]

  // MAP: creates a new array with the results of calling a provided function on every element in the calling array.
    var array1 = [1, 4, 9, 16];
    
    // pass a function to map (with arrow function)
    const map1 = array1.map(x => x * 2);
    
    // without arrow function:
    const map2 = array1.map(function(x) {
      return x * 2; // you must return always!
    });

    console.log(map1);
    // expected output: Array [2, 8, 18, 32]
  
  // FILTER: creates a new array with all elements that pass the test implemented by the provided function.
    var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    console.log(result); // expected output: Array ["exuberant", "destruction", "present"]
  
  // concat: is used to merge two or more arrays.
    var array1 = ['a', 'b', 'c'];
    var array2 = ['d', 'e', 'f'];
    
    console.log(array1.concat(array2));
    // expected output: Array ["a", "b", "c", "d", "e", "f"]
  
  // indexOf: returns the first index at which a given element can be found in the array, or -1 if it is not present.
    var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    console.log(beasts.indexOf('bison'));
    // expected output: 1

    console.log(beasts.indexOf('giraffe'));
    // expected output: -1

  // includes: determines whether an array includes a certain element, returning true or false as appropriate.
    var array1 = [1, 2, 3];
    
    console.log(array1.includes(2));
    // expected output: true
  
  // slice:  returns a shallow copy of a portion of an array
  // into a new array object selected from begin to end (end not included).
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]
  
  // MORE MORE MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// STRINGS:
  
  // Split: splits a String object into an array of strings by separating the string into substrings,
  // using a specified separator string to determine where to make each split.
    var str = "How are you doing today?";
    var res = str.split(" ");
    // res = ["How","are","you","doing","today?"]
  
  // Join: joins all elements of an array (or an array-like object) into a string and returns this string.
    console.log(res.join());
    // expected output: How,are,you,doing,today?
  
  // Replace: returns a new string with some or all matches of a pattern replaced by a replacement.
    var str = 'Twas the night before Xmas...';
    var newstr = str.replace(/xmas/i, 'Christmas');
    console.log(newstr);  // Twas the night before Christmas...   
  
  // substr: returns the characters in a string beginning at the specified location through the specified number of characters. 
    var str = "Hello world!";
    console.log(str.substr(1, 4));
    // expected output: ello

  // trim: method removes whitespace from both ends of a string.
    var str = "       Hello World!        ";
    console.log(str.trim());
    // expected output: Hello World! (without whitespaces)
    
  // MORE MORE MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Object orientation:
    // An object is a collection of properties, and a property is an association between a name (or key) and a value.
    // A property's value can be a function, in which case the property is known as a method.
    // In addition to objects that are predefined in the browser, you can define your own objects.

    // In JavaScript, an object is a standalone entity, with properties and type.

    // Creating objects: (4-ways)
    // 1. Simple way (with syntax constructs):
    var myHyundai = {color: 'black', type: 'sportcar', engine: {cylinders: 4, size: 2.0}, fuel: 'petrol'};
    console.log(myHyundai.engine.size);

    // 2. With a constructor function:
    function Car(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    // Let's make an object using the constructor function:
    var myCar = new Car('Hyundai', 'Coupe SIII 2.0', 2006);
    var joesCar = new Car('Nissan', '300ZX Twin Turbo', 1993);

    console.log(myCar.model);
    console.log(joesCar.make);

    // 3. With the class keyword:
    // Classes are in fact "special functions",
    // and just as you can define function expressions and function declarations
    class Animal {

      constructor(name) {
        this.lifeStatus = "live";
        this.funFactor = 10;
        this.animalName = name;
      }

      makeFun() {
        this.funFactor++;
      }

      killIt () {
        this.lifeStatus = "dead";
        this.funFactor = -1;
      }

      myStatus () {
        return this.animalName + " is " + this.lifeStatus + " and his funFactor is " + this.funFactor;
      }
    }

    var fergie = new Animal('Fergie');
    var bozont = new Animal('Bozont');
    for (let i = 0; i < 4; i++) {
      fergie.makeFun();
    }
    bozont.killIt();
    console.log(fergie.myStatus());
    console.log(bozont.myStatus());

  // 4. With Object.create method:
    var Animal_2 = {
      lifeStatus: "live",
      showStatus: function() {
        console.log(this.lifeStatus);
      }
    }

    var fish = Object.create(Animal_2);
    fish.showStatus();
    fish.lifeStatus = "dead";
    fish.showStatus();

  // an other method, how we can create an object:
    var myCar = new Object();
    myCar.make = 'Ford';
    myCar.model = 'Mustang';
    myCar.year = 1969;

  // Inheritance:
  // JavaScript is a class-free, object-oriented language, and as such,
  // it uses prototypal inheritance instead of classical inheritance. 
  // check this up: https://www.crockford.com/javascript/inheritance.html

  // creat an object with constructor function:
    function Person(first, last, age, gender, interests) {
      this.name = {
        first,
        last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    };

  // definig a Teacher() constructfunction:
    function Teacher(first, last, age, gender, interests, subject) {
      Person.call(this, first, last, age, gender, interests);
    
      this.subject = subject;
    }
  // We want the Teacher() constructor to take the same parameters as the Person()
  // constructor it is inheriting from,
  // so we specify them all as parameters in the call() invocation.

  // Let's create a teacher!
    var blackJack = new Teacher('Jack', 'Black', 31, 'male', 'planet research', 'math');
    console.log(blackJack.name.first);
  
  // other simple inhertance in JS:
    var cat = {legs: 4};
    var dog = Object.create(cat);
    console.log(dog.legs); // 4 --> inherited from cat!!

// Control FLOW:
  // 1. Block statement:
    // {
    //   statement_1;
    //   statement_2;
    //   .
    //   .
    //   .
    //   statement_n;
    // }
  
  // 2. Conditional statements:
    // if (condition_1) {
    //   statement_1;
    // } else if (condition_2) {
    //   statement_2;
    // } else if (condition_n) {
    //   statement_n;
    // } else {
    //   statement_last;
    // } 

    // falsy values: false, undifined, null, 0, NaN, ""
  
  // 3. switch statement
    // switch (expression) {
    //   case label_1:
    //     statements_1
    //     [break;]
    //   case label_2:
    //     statements_2
    //     [break;]
    //     ...
    //   default:
    //     statements_def
    //     [break;]
    // }
  
// ERROR Handling:
  // You can throw exceptions using the throw statement and handle them using the try...catch statements.

  function under18(age) {
    if (age > 18) {
      return age;
    } else {
      throw 'He/She is under 18 :('
    }
  }

  function logMyErrors(error) {
    console.log(error);
  }

  try { // statements to try
    petersAge = under18(17); // function could throw exception
  }
  catch (e) {
    petersAge = 'less than 18';
    logMyErrors(e, petersAge); // pass exception object to error handler -> your own function
  }
  finally {
    console.log('That was the age control!');
  } // The finally block executes whether or not an exception is thrown!
  
// Difference between == and ===
  // === is strict equality: it compares two values for equality.
  // Neither value is implicitly converted to some other value before being compared.
  // If the values have different types, the values are considered unequal.
  // Otherwise, if the values have the same type and are not numbers,
  // they're considered equal if they have the same value.
  //  Finally, if both values are numbers, they're considered equal if they're both not NaN!

  // == is loose equality: it compares two values for equality, after converting both values to a common type.
  // After conversions (one or both sides may undergo conversions),
  // the final equality comparison is performed exactly as === performs it.
  // Loose equality is symmetric!
  
  //Examples:
  var a = 17;
  var b = "17";
  console.log(a === b); // false
  console.log(a == b); // true

  var a = 0;
  var b = false;
  console.log(a === b); // false
  console.log(a == b); // true

  var a = null;
  var b = undefined;
  console.log(a === b); // false
  console.log(a == b); // true

// this keyword:
  // In most cases, the value of this is determined by how a function is called.
  // In the global execution context (outside of any function),
  // this refers to the global object whether in strict mode or not.

  // Inside a function, the value of this depends on how the function is called.

  var test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };
  console.log(test.func());
  // expected output: 42
  
  // An object can be passed as the first argument to call or apply and this will be bound to it.
  var obj = {a: 'Custom'};

  // This property is set on the global object
  var a = 'Global';

  function whatsThis(arg) {
    return this.a;  // The value of this is dependent on how the function is called
  }

  whatsThis();          // 'Global'
  whatsThis.call(obj);  // 'Custom'
  whatsThis.apply(obj); // 'Custom'

// bind method: f.bind(someObj):
  // creates a new function with the same body and scope as f, but where this occurs in the original function,
  // in the new function it is permanently bound to the first argument of bind,
  // regardless of how the function is being used.

  function f() {
    return this.a;
  }

  var g = f.bind({a: 'azerty'});
  console.log(g()); // azerty

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

// Prototype:
  // Every JavaScript object has a prototype. The prototype is also an object.
  // All JavaScript objects inherit their properties and methods from their prototype.

  function onePerson(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  Person.prototype.nationality = "English";
  var myFather = new Person("John", "Doe", 50, "blue");
  console.log(myFather.nationality);

// Callback function:
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