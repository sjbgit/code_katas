
function sortIt(list, n) {
	//var re = /,/gi;

	var pos = n - 1;
	var result =  list.replace(/,/gi, '').split(' ').sort(function(a,b) {

		console.log(a.split(''));

		var aVal = a.split('')[pos]
		var bVal = b.split('')[pos];
		
		console.log(aVal + ' ' + bVal);

		if (aVal < bVal) {
			return -1;
		}
		if (aVal > bVal) {
			return 1;
		}
		// a must be equal to b
		return 0;
	  
	});
	
  	return result.join(',');
}



console.log(sortIt('bill, bell, ball, bull', 2));
console.log(sortIt('cat, dog, eel, bee', 3));

/*
function sortIt(list, n) {
  return list.split(', ').sort(function(a, b) {
    return a.charCodeAt(n - 1) > b.charCodeAt(n - 1)
  }).join(', ')
}
*/

/*
function sortIt(list, n) {
  n = n - 1;
  return list
      .split(/[^a-z]+/i)
      .sort(function(a, b) {
        a = a[n];
        b = b[n];
        return a===b ? 0 : a < b ? -1 : 1;
      })
      .join(', ');
}
*/