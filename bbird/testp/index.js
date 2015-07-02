var Promise = require('bluebird');


var prom = tProm();

var x = {
	output: function() { console.log('test');},
	doSomething: function(input) {
		prom.resolve(input);
	},
	promise: prom,
};



function tProm() {

	return new Promise(function(resolve, reject) {
		console.log('created promise');
	});

}

module.exports = x;