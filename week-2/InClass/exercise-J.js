function secondMatchesAmy(array) {
	if (array[1] == "Amy") {
		return "Second index matched!";
	}
	return "Second index not matched";
}

let names = ["Alex", "Amara", "Carlos"];
let names2 = ["Alli", "Amy", "Naresh"];
const result = secondMatchesAmy(names);
console.log(result);
