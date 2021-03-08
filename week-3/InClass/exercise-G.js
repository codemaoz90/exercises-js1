const nacimiento = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
function arrYears(arr) {
	const resultado = arr.filter((nac) => 2021 - nac > 17);
	return (
		"Estos son los años de nacimiento de las personas que pueden manejar: " +
		resultado
	);
}

console.log(arrYears(nacimiento));
