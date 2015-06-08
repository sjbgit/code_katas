var x = 1;

//spaces are getting

//best

function letterChange(str) {
  return str.replace(/\w/g, function(c) {
      return String.fromCharCode(
          c.charCodeAt(0) + (c != "Z" && c != "z" ? 1 : -25));
    });
}


function letterChange1(str) {
	var map = {
		'Z': 'A',
		'z': 'z',
		' ' : ' '
	}
	var output = [];	
	var chars = str.split('');	
	for (var i = 0; i < chars.length; i++) {
		var c = chars[i];		
		if (map[c] != undefined) {
			output.push(map[c])
		}			
		else {
			output.push(String.fromCharCode(c.charCodeAt() + 1));
		}
		
	}
	return output.join('');
}



/*
function letterChange(str) {
	var output = [];	
	var chars = str.split('');	
	for (var i = 0; i < chars.length; i++) {
		var c = chars[i];
		if (c === ' ') {
			output.push(' ');
		}
		else if(c === 'Z') {
			output.push('A');
		}
		else if (c === 'z') {
				output.push('a');
		}		
		else {
			output.push(String.fromCharCode(c.charCodeAt() + 1));
		}
		
	}
	return output.join('');
}
*/


console.log(letterChange('JavaScript z'));

var map = {
	'Z': 'A',
	'z': 'z',
	' ' : ' '
}
