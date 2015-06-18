function defaultArguments(func, params) {
  // TODO: Program me
  var args = func.getParamNames();
  console.log(args);
  /*
  console.log(Object.getOwnPropertyNames(func));
  console.log(func);
  for(var name in (Object.getOwnPropertyNames(func))) {
  	console.log(func[name]);
  }
  */
}

Function.prototype.getParamNames = function() {
	var pattern = /function[^(]*\(([^)]*)\)/;
  	var args = this.toString().match(pattern)[1].split(/,\s*/);
  	return args
}

/*
Function.prototype.toString = function() {
	console.log(Object.getOwnPropertyNames(this));
}
*/


function add(a,b) { return a+b;};


console.log('test');

var x = add;

x.toString();


var add_ = defaultArguments(add,{b:9});