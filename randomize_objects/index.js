
Object.prototype.random = function() {
	var values = this.getAllValues();
	return values[Math.floor(Math.random() * values.length)];
};

Object.prototype.toRandomArray = function() {
	var values = this.getAllValues();
	for(var j, x, i = values.length; i; j = parseInt(Math.random() * i), x = values[--i], values[i] = values[j], values[j] = x);
	return values;
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

			
		});

		return values;

		
	})(this);
	return results;	 
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

console.log(obj1.random());

console.log(obj1.toRandomArray()); 




Object.prototype.random = function() {
  var values = this.getValues();
  return values[Math.floor(Math.random() * values.length)]
};

Object.prototype.toRandomArray = function() {
  var result = [], values = this.getValues();
  while (values.length > 0) result.push(values.splice(Math.floor(Math.random() * values.length), 1)[0]);
  return result;
};

Object.prototype.getValues = function () {
  var values = [], self = this;
  Object.keys(self).forEach(function (key) {
    if (typeof self[key] == "object") values = values.concat(self[key].getValues());
    else values.push(self[key]);
  });
  return values;
}