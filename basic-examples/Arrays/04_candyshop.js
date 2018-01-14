'use strict';

var shop_items = ["Cupcake", 2, "Brownie", false]

// Accidentally we added "2" and "false" to the array. 
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)

shop_items = shop_items.map(function(item) {
  if (item === 2) {
    return "Croissant";
  } else if (item === false) {
    return "Ice cream"
  } else {
    return item;
  }
});

// shop_items[1] = "Croissant";
// shop_items[3] = "Ice cream";
console.log(shop_items);