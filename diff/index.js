
function array_diff(a, b) {
	
	var result = [];
	
	for (var i = 0; i < a.length; i++) {
		var val = a[i];
		console.log('outer: ' + val);
		var isFound = false;
		for (var j = 0; j < b.length; j++) {
			var innerVal = b[j];
			console.log('inner: ' + innerVal);
			console.log('comparing: ' + val + ' ' + innerVal);
			if (innerVal === val) {
				console.log('found: ' + innerVal);
				isFound = true;
			}
		}		
		if (!isFound) {
			result.push(val);
		}
	}
	
	return result;
	
	
}



console.log(array_diff([1,2,3,4,5],[3,4,5]))