var Promise = require('bluebird');


var prom = tProm();

var x = {
	output: function() { console.log('test');},
	doSomething: function(input) {
		prom.resolve(input);
	},
	promise: prom,
};


//take query as a param
function tProm() {

	var res = null;
	var ref = null;

	return new Promise(function(resolve, reject) {
		console.log('created promise');

	});
/*
	return {
		p: prom,
		res: 
		rej
	}
*/
}

module.exports = x;