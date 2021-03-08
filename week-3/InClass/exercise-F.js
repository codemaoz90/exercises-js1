function age(birthYear) {
	const checkEdadMinima =
		2021 - birthYear > 17
			? `Los nacidos en ${birthYear} pueden manejar`
			: `Los nacidos en ${birthYear} pueden manejar en ${
					17 - (2021 - birthYear)
			  } año`;

	return checkEdadMinima;
}

function arrBirthday(myfunc) {
	const nacimiento = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

	const ageArray = nacimiento.map(myfunc);
	return ageArray;
}

console.log(arrBirthday(age));
