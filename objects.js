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