/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

// function onlyStudents.
function onlyStudents(name) {
	return students.indexOf(name) !== -1;
}

var groupIsOnlyStudents = group.every(onlyStudents); // complete this statement

if (groupIsOnlyStudents) {
	console.log("The group contains only students");
} else {
	console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
