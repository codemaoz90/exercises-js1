const { count } = require("console");

var apolloCountdownMessage = "all engine running... LIFT-OFF!";
var countdown = 8;

while (countdown >= 0) {
	console.log(countdown);
	if (countdown === 0) {
		console.log(apolloCountdownMessage);
	}
	countdown = countdown - 1;
}
//console.log(apolloCountdownMessage);
