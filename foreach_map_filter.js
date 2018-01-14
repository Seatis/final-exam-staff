var myArray = ["BMW", "Audi", "Mercedes", "Porsche", "Trabant"];

myArray.forEach(function(element, index, array) {
  console.log(element);
});

const appendA = myArray.map(x => x + 'a');
console.log(appendA);

const result = myArray.filter(word => word.length > 4);
console.log(result);