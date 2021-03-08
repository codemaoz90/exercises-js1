function age(birthYear) {
	return 2021 - birthYear;
}

function arrBirthday(myfunc) {
	const nacimiento = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
	const ageArray = nacimiento.map(myfunc);
	return ageArray;
}

console.log(arrBirthday(age));
