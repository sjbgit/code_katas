
Object.prototype.random = function() {
	
};

Object.prototype.toRandomArray = function() {
	
};



Object.prototype.getAllValues = function() {
	
	
	var results = (function(input) {
		
		var values = [], objArr = [];

		Object.keys(input).forEach(function(element, index, array) {
			if (typeof(input[element]) === 'object') {
				objArr.push(input[element]);
			}
			else {
				values.push(input[element]);
			}
		});

		objArr.forEach(function(element, index, array) {
			element.getAllValues().forEach(function(element, index, array) {
				values.push(element);
			})

			//values.push(element.getAllValues());
		});

		return values;

		/*
		for (key in Object.keys(input)) {
			console.log(input[key]);
		}
		*/
		//console.log(keys);

		/*
		for (key in input){
			console.log(input[key]);
		}
		*/

	})(this);



	return results;

	//var objs = [];
	
	/*
	var results = (function(input, objArr) {
		

		return Object.keys(input).map(function(x) {
			
			//return (typeof(input[x]) === 'object') ? input[x].getAllValues() : input[x];
			if (typeof(input[x]) === 'object') {
				objArr.push(input[x]);

			}
			else {
				return input[x];
			}
			
			
		});

	})(this, objs);

	return results;
	*/
	
	console.log('test');
	
}

Object.prototype.getAllValues1 = function() {
		
	return (function(input) {
		
		return Object.keys(input).map(function(x) {
			
			return (typeof(input[x]) === 'object') ? input[x].getAllValues() : input[x];
			
		});

	})(this);
		
	console.log('test');
	
}


var obj = {
	a: 'first',
	b: 'second',
	c: 'third',
	d: {
		e: 'fourth',
		f: 'fifth'
	}
};


console.log(obj.getAllValues());



var obj1 = {
    a: 1,
    b: {
        x: 2,
        y: 3
    },
    c: {
        z: {
            q: 4
        }
    }
};
 

 console.log(obj1.getAllValues());

