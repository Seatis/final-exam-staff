'use strict';
// Add "a" to every string in far

var far = ["kuty", "macsk", "kacs", "rók", "halacsk"];

far = far.map(word => word + 'a');

// far.forEach(function(item, index) {
//   far[index] += "a";
// });

console.log(far);