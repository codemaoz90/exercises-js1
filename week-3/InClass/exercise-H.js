const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
function findName(arrName, name) {
	const result = arrName.find((nameArray) => nameArray === name);
	if (result) {
		return "Found me!";
	} else {
		return "Haven't found me";
	}
	return result;
}

console.log(findName(names, "pedrito"));
