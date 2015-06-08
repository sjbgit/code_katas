function dirReduc(arr){
	var resultArr = [];
	for (var i = 0; i < arr.length; i++) {
		
		console.log(i)
		if (i <= arr.length - 1) {
			var result = negate(arr[i], arr[i+1]);
			if (result) {
				//skip and do not push
				i++
			}
			else {
				resultArr.push(arr[i]);
			}
			console.log(result);
			console.log(arr[i] + ' ' + arr[i+1])
			
		}
		
		/*
		if (i === arr.length - 1) {
			
		}
		*/
		
		/*
		if (i + 1 >= arr.length) {
			result.push(arr[i]);
		}
		
		if (!negate) {
			result.push()
		}
		*/
	}
	
	return resultArr;

}

function negate(a, b) {
	if ((a === 'NORTH' && b === 'SOUTH') || (a === 'SOUTH' && b === 'NORTH')) {
		return true;
	}
	
	return false;
}




console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
