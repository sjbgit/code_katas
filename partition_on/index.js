

function partitionOn(pred, items) {

	var trues = [], falses = [];

	items.forEach(function(element, index, array) {
		var item = items[index];
	    var result = pred.call(this, item);

	    if (result) {
	    	trues.push(item);
	    }
	    else {
	    	falses.push(item)
	    }

	    console.log(result);

		//trues.push(items[index]);
	});

	

	var concatted = falses.concat(trues);

	concatted.forEach(function(element, index, array) {
		items[index] = concatted[index];
	});

	console.log(items);

	return falses.length;
	//console.log(trues);


}

var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}

var i = partitionOn(isEven, items);

console.log(i);
console.log(items);