const students = [
	"Ronar",
	"Emilio",
	"Toño",
	"Juan",
	"Adrian",
	"Giomar",
	"Mateo",
	"Fode",
	"Manuel",
];
const students2 = ["Pepito", "Jaimito", "Carlos", "Lucho", "Mañuco"];

console.log(students.concat(students2).sort());

function checkStudent(name, arr) {
	if (arr.includes(name)) {
		const nuevoArray = [...arr];
		nuevoArray.pop(name);
		return `${name} esta en la clase con ${nuevoArray.join(",")}`;
	}
	return `${name} no esta en la clase con ${arr.join(",")}`;
}
console.log(checkStudent("Manuel", students));
