

var success = [];
Array.prototype.push.bind(success)

var x = [];
x.push('test');

console.log(success);

console.log(x);

var obj = {
	success: Array.prototype.push.bind(success)

}



