/*
  Array methods - .slice()
  ------------------------
  The variable `firstFive` should contain the first five items of `everyone`
  The variable `lastFive` should contain the last five items of `everyone`
*/

var everyone = [
	"Daniel",
	"Irina",
	"Rares",
	"Rukmini",
	"Abdul",
	"Austine",
	"Swathi",
];

var firstFive = [...everyone];
firstFive = firstFive.splice(0, 5); // complete this statement

var lastFive = [...everyone];
lastFive = lastFive.splice(lastFive.length - 5, 5); // complete this statement

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(firstFive);
// console.log(everyone);
console.log(lastFive);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Rares", "Rukmini", "Abdul"]
  ["Rares", "Rukmini", "Abdul", "Austine", "Swathi"]
*/
