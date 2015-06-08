

function squares(n,m) {
	var results = [];
	results.push(n);
	for (var i = 1; i < m; i++) {
		n *= n
		results.push(n);
	}
	return results;

}




console.log(squares(2,5));
console.log(squares(3,3));

var n = 3;
var result = Array.apply(0, Array(n)).map(function(_,i) {
	//console.log(i);
	return i ? n = n * n : n;
});

console.log(result);


/*
function squares(x, n) {
  return Array.apply(0, Array(n)).map(function(_,i){return i? x=x*x : x})
}
*/