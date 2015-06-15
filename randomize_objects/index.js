
Object.prototype.random = function() {
	
};

Object.prototype.toRandomArray = function() {
	
};

Object.prototype.getAllValues = function() {
	
	

	return (function(input) {
		//console.log('xxx');
		//console.log(input);

		return Object.keys(input).map(function(x) {
			return input[x];
			//console.log(this);
			//console.log(x);
		});

	})(this);
	
	/*
	(function(obj) {
		Object.keys(this).map(function(x) {
			//console.log(this);
		//console.log(x);
		});
	})(this);
	*/
	console.log('test');
	/*
	
	Object.keys(this).map(function(x) {
		console.log(this);
		//console.log(x);
	});
*/
}


var obj = {
	a: 'first',
	b: 'second',
	c: 'third'
};


console.log(obj.getAllValues());
 

