// timer countdown
var countDown = function(callback){
	var count = 10;
	var counter = setInterval(function() {
		console.log(count);
		count = count - 1;
		if (count < 0) {
			clearInterval(counter);
			callback("LIFT OFF!");
		}
	}, 1000);
}

//// board control
var five = require("johnny-five");
var board = new five.Board({
	debug: true,
	repl: false
});

board.on("ready", function() {
	var launchSignal = new five.Led({
		pin: 13
	});
	launchSignal.off();

	countDown(function(resp) {
		console.log(resp);
		launchSignal.on();
	});
});
