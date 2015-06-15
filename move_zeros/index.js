var moveZeros = function (arr) {
  // TODO: Program me
  var data = [], zeros = [];

  var filtered = arr.filter(function(x) {
  	if (x === 0) {
  		zeros.push(0)
  	}
  	return x != 0;
  });


  return filtered.concat(zeros);
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))

console.log(typeof([]));


var moveZeros = function (arr) {
  //get non-zeros then get the zeros
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}