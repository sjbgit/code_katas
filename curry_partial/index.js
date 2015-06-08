

function curryPartial(fn, x) {
	return function(y) {
		return fn(x,y);
	}

}


function add(a, b) {
	return a + b;
}


function curriedAdd(a) {
	return function(b) {
		return function(c) {
			return a + b + c;
		}
	}
}


function partialAdd(a) {
	return function(b, c) {
		
		return a + b + c;
	}
}

function testArgs(input) {
	
	var f = {};

	for (var key in input) {
		if(typeof input[key] === 'function') {
			f = input[key];
		}
	}

	//if 

	/*
	if (Object.keys(input).length === 0) {
		console.log('input is empty');
	}
	*/
	console.log(arguments);
	console.log(typeof input === 'function');
}



Object.prototype.isEmpty = function() {
	for (var key in this) return false; return true;
	//return Object.keys(this).length === 0;
}

var x = curriedAdd(4)(5)(6);
console.log(x);

var x1 = partialAdd(3)(4,5);
console.log(x1);

//testArgs(add);
testArgs();

console.log('is empty: ' + { a: 'test'}.isEmpty());


//var x = curryPartial(add, 2)(3);

//var ca = curryPartial(add);
//var x = curriedAdd(add)(1)(2)(3);



//console.log(x);