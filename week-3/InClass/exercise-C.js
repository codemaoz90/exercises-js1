function toMayusculas(arr) {
	const arrMayuscula = arr.map((el) => el.toUpperCase());
	return arrMayuscula;
}

function abracaFunction(yourFunction) {
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

	const abracaOutput = yourFunction(abracaArray);
	return abracaOutput;
}

// LLamada a la funcion.
console.log(abracaFunction(toMayusculas));
