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