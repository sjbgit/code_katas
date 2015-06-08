function findMissingNumber(sequence){
	//if (sequence.length === 0) {
	//	return 0;
	//}
	var splitItems = sequence.split(' ');
	console.log(splitItems);
	for (var x = 0; x < splitItems.length; x++) {
		splitItems[x] = Number(splitItems[x]);
	}
	splitItems = splitItems.sort(function(a,b) {


		return a===b ? 0 : a < b ? -1 : 1
	});
	console.log(splitItems);
	//console.log(sequence.length);

    for(var i = 0; i <= splitItems.length - 1 ; i++) {
    	console.log(i + ': ' + splitItems[i]);
    	if (Number(splitItems[i]) != (i + 1)) {
    		return i + 1;
    	}
    }

    return 0; 
  
}

//console.log(findMissingNumber("1 2 3 5"));
//console.log(findMissingNumber("1 3"));
//console.log(findMissingNumber(""));
console.log(findMissingNumber("4 7 6 1 9 2 8 5 10"));  


/*
function findMissingNumber(sequence){
  var arr =sequence.split(' ').map(Number), //map to convert each item
      length = arr.length,
      estimatedSumm = length*(length+1)/2,
      summ = arr.reduce(function(a,b){return a+b},0);
     
     return summ-estimatedSumm>0?
     (length+1)*(length+2)/2-summ:
     summ-estimatedSumm<=0?0:1
 
}
*/