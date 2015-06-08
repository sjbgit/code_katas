/*

function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}




*/


function count (string) {  
   var obj = {};
   var chars = string.split('');
   for (var i = 0; i < chars.length; i++) {
		if (obj[chars[i]] === undefined) {
			obj[chars[i]] = 1;
		}
		else {
			obj[chars[i]] += 1
		}
   }
   return obj;
}


//console.log(count('aba'));
/*
for (var i = 1;i<=5;i++) {
	
	(function() {
		var x = i;
		setTimeout(function() {
		console.log("i: " + x);
	}, x*1000);	
	})();
	
}
*/

for (var i = 1;i<=5;i++) {
	
	(function(i) {		
		setTimeout(function() {
			console.log("i: " + i);
		}, i*1000);
	})(i);
	
	
}




/*

for (var i = 1;i<=5;i++) {
	
	to(i);
	
}
*/

function to(i) {
	setTimeout(function() {
			console.log("i: " + i);
	}, i*1000);
}



