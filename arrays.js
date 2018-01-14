// How to declare it:
let newArray = ["green", 6, "blue", false];
newArray.forEach(function(element) {
  console.log(element);
});

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