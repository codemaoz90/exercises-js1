function checkUsername(nombre, tipo) {
	const tipos = ["manager", "admin"];

	// const vocales = ["a", "e", "i", "o", "u"];
	const toUppercase = nombre[0].toUpperCase();
	if (nombre[0] === toUppercase && nombre.length >= 5) {
		console.log("Username valid");
	} else if (tipos.indexOf(tipo) !== -1) {
		console.log("Username valid");
	} else {
		console.log("Username invalid");
	}
}
checkUsername("Maanuel", "cabo");
