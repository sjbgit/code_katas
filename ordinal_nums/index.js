/*

function ordinal(number, brief) {
  var lastDigit = number % 10;
  var penultimateDigit = ((number - lastDigit) / 10) % 10; //second to last
  
  if(penultimateDigit === 1 || lastDigit === 0 || lastDigit >= 4) return "th";
  if(lastDigit === 1) return "st";
  if(brief) return "d";
  if(lastDigit === 2) return "nd";
  if(lastDigit === 3) return "rd";
}

*/

/*
//there was an extra item on the array prototype
function fix_countdown() {
  delete Array.prototype.Dammit; 
}
*/



function ordinal(number, brief) {
	
	var ord = '';
	var nums = number.toString().split('');
	var length = nums.length;
	if (length === 0) {
		return;
	}
	var lastDigit = nums[nums.length - 1];
	console.log('last dig: ' + lastDigit);
	if (lastDigit === '1') {
		ord = 'st';
	}
	else if(lastDigit === '2') {
		ord = 'nd';
		if (brief !== undefined && brief) {
			ord = 'd';
		}
	}
	else if(lastDigit === '3' && brief) {
		ord = 'rd';
		if (brief !== undefined) {
			ord = 'd';
		}
	}
	else {
		ord = 'th';
	}
	//if (lastDigit)
	console.log(nums);

	console.log(brief !== undefined);
	
	
	
	if (nums.length >= 2 && nums[nums.length - 2] === '1') {
		console.log('in here');
		ord = 'th';
	}
	/*
	if (brief !== undefined) {
		ord = ord.split('')[1];
	}
	*/
	return ord;
  
}

console.log(ordinal(2, false));