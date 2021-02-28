const students = ["Manuel", "Pepito", "Luchito", "Jaimito"];

for (let index = 0; index < students.length; index++) {
	const element = students[index];
	console.log(element);
}

let count = [];

for (let index = 0; index < 10; index++) {
	count.push(index);
}
let result = count.join("+");
console.log(count, result);
