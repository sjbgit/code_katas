var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};

/*

Function.prototype.pipeTest = function(o) {
	var fn = this
	var args = arguments;
	
	console.log('args: ');
		console.log(args);
		console.log('+++++++++++++++++');
	return function() {
		console.log('[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]');
		console.log(args);
		console.log('args 0: ');
		console.log(arguments[0] = args['0'](arguments[0]));
		//console.log(o,arguments);
		return o.apply(o,arguments);
	}
}

Function.prototype.pipe = function(input, data) {
	console.log(input);
	console.log(data);
	console.log('---------------------------');
	return input.call(data);
	//console.log('test');
}

var x = function(e) {
	console.log(e);
	return (function() {
		console.log('test in: ' + e);
	});
};
*/
//fun = square


Function.prototype.pipe = function(fun) {
	console.log('fun: ' + fun); //square function
  return function(param) { //is this being called for each item coming out of map? yes
		console.log('param: ' + param);
		console.log('this: ' + this); //this is the addone param
		return fun(this(param)); //pass the result of calling addone with the param to square  //this is the outer function?
  }.bind(this); //this here is the addone function (the calling function)
};

console.log([1,2,3,4,5].map(addOne.pipe(square)));



//var result = [1,2,3,4,5].map(addOne);

//console.log(result);



//x.pipe(x);

/*
console.log([1,2,3,4,5].map(addOne.pipe(square)));
*/