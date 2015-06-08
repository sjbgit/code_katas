//speaking javascript


function toArray(arrayLikeObject) {
	return Array.prototype.slice.call(arrayLikeObject);
}


function test(a, b, c) {
	console.log(toArray(arguments));
}


test(1,2,3);

test(function() { }, 4, 5);


console.log(toArray(1));

/*
var arr = Array.prototype.slice.call(arguments);
console.log(arr);
*/

var obj = { '0': 'abc' };
var arr = Array.prototype.slice.call(obj);
console.log(arr);



var n = 1024;

console.log(getBaseLog(2, n));
console.log((getBaseLog(2, n) % 1) === 0);


//console.log(getTestBase(16));

function getTestBase(n) {
  console.log((Math.log(2) / Math.log(n)));
  return (Math.log(2) / Math.log(n)) % 1 === 0;
}


//console.log(2 % 1);


function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

/*
var n = 1024;
return (Math.log(2) / Math.log(n)) % 2 === 0;
*/