const arr = [
	100,
	"iSMael",
	55,
	45,
	"sANyiA",
	66,
	"1JaMEs",
	"eLAmIn",
	23,
	"IsMael",
	67,
	19,
	"ElaMIN",
];

function cleanArray(arr) {
	const resutado = arr.filter((data) => typeof data !== "number");
	//console.log(resultado);
	return resutado.map((dato) => dato.toUpperCase() + "!");
}

console.log(cleanArray(arr));
