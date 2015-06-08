

function serializeFunc (func, args, exclude) {	
	var funcParamsArray = getFunctionParams(func);	
	var items = [];
	for (var i = 0; i < funcParamsArray.length; i++) {
		var param = funcParamsArray[i];
		if (exclude.indexOf(param) === -1) {			
			items.push(param + '=' + args[i]);
		}
	}		
	return items.join('&');
}

 function getFunctionParams(func) {
 	var reg = /\(([\s\S]*?)\)/;
	var params = reg.exec(func); 
 	return params ? params[1].split(',').map(function(f) { return f.trim(); }) : [];
 }



function serializeFuncOld (func, args, exclude) {
	//get names of paramaters
	var funcParamsArray = getFunctionParams(func);
	console.log(funcParamsArray);
	//console.log(func);
	console.log(args);
	console.log(exclude);

	//lose the index here
	var filteredParams = getFunctionParams(func).filter(function(f) {
		return exclude.indexOf(f) === -1;
	});

	console.log(filteredParams);

	var output = '';
/*
	for (var i = 0; i < filteredParams.length; i++) {
		var param = funcParamsArray[i];
		if (exclude.indexOf(param) != -1) {
			console.log('exclude: ' + param);
		}
	}
*/
	//var obj = {};

	var items = [];

	for (var i = 0; i < funcParamsArray.length; i++) {
		var param = funcParamsArray[i];
		if (exclude.indexOf(param) === -1) {
			//add
			items.push(param + '=' + args[i]);
		}
	}
	

	console.log(items.join('&'));

	return '';
}


// Example function to serialize its arguments
function someFunction (name, family, position, n_children) {
    data = serializeFunc(someFunction, arguments, ['family', 'n_children']);

    return data;
}


var result = someFunction("joe", "doe", "developer", 8);
console.log('result: ' + result);
console.log(result === 'name=joe&position=developer');


/*
var reg = /\(([\s\S]*?)\)/;
var params = reg.exec(someFunction);
if (params) {
     var param_names = params[1].split(',').map(function(f) { return f.trim(); });
     console.log(param_names);
 }
*/




 //console.log(getFunctionParams(someFunction));



