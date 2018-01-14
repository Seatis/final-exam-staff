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