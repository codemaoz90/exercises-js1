edad = 20;

function nacimiento(year) {
	const edad = 2021 - year;
	return edad;
}

function answer(name, year) {
	return `Mi nombre es ${name} naci en el año ${year} y tengo ${nacimiento(
		year
	)} `;
}

console.log(nacimiento(200));
