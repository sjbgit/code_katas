

function goodVsEvil(good, evil){

  var goodResult = good.splitMapAndReduce(' ', [1,2,3,3,4,10]); 	
	var evilResult = evil.splitMapAndReduce(' ', [1,2,2,2,3,5,10]);
	
	return goodResult === evilResult ? 'Battle Result: No victor on this battle field' 
  : (goodResult > evilResult ? 'Battle Result: Good triumphs over Evil' : 'Battle Result: Evil eradicates all trace of Good');

}

Object.prototype.splitMapAndReduce = function(delimiter, mappedValues) {
	return this.split(' ').mapAndReduce(mappedValues);
}

Array.prototype.mapAndReduce = function(mappedValues) {
	return (this.map(function(value, index) {
		return (0 + value) * mappedValues[index]; 
	}).reduce(function(total, num) {
		return total + num;
	}, 0));
}

/*
function goodVsEvil(good, evil){
	var goodValues = [1,2,3,3,4,10];
	var evilValues = [1,2,2,2,3,5,10];
	var message = 'Battle Result: No victor on this battle field';
	
	
	/*
	var goodInput = good.split(' ').map(function(value, index) {
		return (0 + value) * goodValues[index]; 
	});
	
	var reduced = goodInput.reduce(function(total, num) {
		return total + num;
	}, 0);
	*/
	
/*	
	var goodResult = (good.split(' ').map(function(value, index) {
		return (0 + value) * goodValues[index]; 
	}).reduce(function(total, num) {
		return total + num;
	}, 0));
	
	var evilResult = (evil.split(' ').map(function(value, index) {
		return (0 + value) * evilValues[index]; 
	}).reduce(function(total, num) {
		return total + num;
	}, 0));
	
	if (goodResult > evilResult) {
		message = 'Battle Result: Good triumphs over Evil';
	}
	else if (goodResult < evilResult) {
		message = 'Battle Result: Evil eradicates all trace of Good';
	}
	
	console.log(goodResult);
	console.log(evilResult);

	return message;
}
*/


console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));