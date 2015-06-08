
console.log('test');



function start(x) {
	x = x+1;
	return persist(x);
}


function persist(x) {
	console.log(x);
}

var x = 10;

start(x);

console.log('x: ' + x );


function curry(x) {	
	return function(y) {
		return x * y;
		
	}		
}


var val = 9;

var t = curry(val);

val = 10;

var result = t(8);
console.log(result);