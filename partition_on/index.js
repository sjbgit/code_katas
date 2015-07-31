

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

///////////////////////////////////////////

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var f = items.filter( function(e) { return !pred(e); } ); 
  var t = items.filter(pred); 
  items.length = 0;
  for(var i = 0; i < f.length; i++) { items.push(f[i]); }
  for(var i = 0; i < t.length; i++) { items.push(t[i]); }
  
  return f.length;
  
}