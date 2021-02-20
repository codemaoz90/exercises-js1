var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// Exercise numero 1

let numberOfStudents = 15;
let numberOfMentor = 8;
let total = numberOfStudents + numberOfMentor;

console.log(
	`Percentage students: ${Math.round((numberOfStudents / total) * 100)}%`
);
console.log(
	`Percentage students: ${Math.round((numberOfMentor / total) * 100)}%`
);

// Exercise numero 2
function upperCaseNames(name) {
	return name.toUpperCase();
}

function gretting(name) {
	const nameUpperCase = upperCaseNames(name);
	return `HELLO ${nameUpperCase}`;
}

console.log(gretting(mentor1));
console.log(gretting(mentor2));
console.log(gretting(mentor3));
console.log(gretting(mentor4));
console.log(gretting(mentor5));
