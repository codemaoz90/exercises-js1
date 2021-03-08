function abracaFunction(yourFunc) {
	console.log(
		"I am abracaFunction! Watch as I mutate anarray of strings to your heart's content!"
	);
	const abracaArray = [
		"James",
		"Elamin",
		"Ismael",
		"Sanyia",
		"Chris",
		"Antigoni",
	];
	const abracaOutput = yourFunc(abracaArray);
	return abracaOutput;
}

function sortedArray(arr) {
	return arr.sort();
}

console.log(abracaFunction(sortedArray));
