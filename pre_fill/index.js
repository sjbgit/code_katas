
/*
function prefill(n, v) {
 
	var a = new Array(3); // [1,2,3];

	console.log(a.length);



	var b = a.map(function(x) {
		console.log('this is the value of x: ' + x);
		return v;
	});



	return b;

		/*
 	return (new Array(n)).map(function(x) {
 		
 		//return v;
 	});

}
*/

function prefill(n,v) {
	var parsedValue = parseInt(n);
	if (!n || parsedValue < 0) {
		throw Error({name: 'TypeError', message:  n + ' is invalid'});
	}
	return Array.apply(null, Array(parsedValue)).map(function() { return v; });
}
console.log(prefill(3,1)); 


console.log(isNaN('xyz'));