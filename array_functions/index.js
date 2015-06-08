
Array.prototype.square = function() {
  return this.map(function(num){
		return Math.pow(num, 2);
	});	
}

Array.prototype.cube = function() {
	return this.map(function(num){
		return Math.pow(num, 3);
	});	
}

Array.prototype.sum = function() {
	return this.reduce(function(a,b){
		return a + b;
	});	
}

Array.prototype.average = function() {
	return this.sum() / this.length;
}

/*
Array.prototype.average = function() {
	return (this.reduce(function(a,b){
		return a + b;
	}, 0)) / this.length;
}
*/

Array.prototype.even = function() {
	return this.filter(function(value) {
		return (value % 2) === 0;
	});
}

Array.prototype.odd = function() {
	return this.filter(function(value) {
		return (value % 2) != 0;
	});
}


var numbers = [1, 2, 3, 4, 5];
console.log(numbers.square());

console.log(numbers.average());

console.log(numbers.even());