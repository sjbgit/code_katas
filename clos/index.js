



function postData() {

	var data = 'xxx';

	return function() {
		console.log(data);

	}
}


var f = postData();
f();



function partialAdd(a) {
	return function(b, c) {
		console.log('test');
		return a + b + c;
	}
}


var pa = partialAdd(1)(2,3);

console.log(pa);