//Exercise 1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
console.log(fruits);
fruits.sort();
fruits.push("kiwi");
console.log(fruits)
fruits.splice(0,1);
console.log(fruits.reverse());

//Exercise 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1]);