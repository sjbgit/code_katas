/*
function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}



*/

function dirReduc(arr){
  var obj = {
	    reducedResult: [],
		NORTH: 0,
		SOUTH: 0,
		EAST: 0,
		WEST: 0,		
		count: function(input) {
			for (var i = 0; i < input.length; i++) {
				obj[input[i]] += 1;
			}		
		},
		reduceAndPush: function(first, second) {			
			if (this[first] === 1 && this[second] === 1) {
				this.reducedResult.push(first);
				this.reducedResult.push(second);
				return;
			}
			
			var absValue = Math.abs(this[first] - this[second]);
			if (absValue === 0) {
				return;
			}
			var field = this[first] - this[second] ? first : second;
			for (var i = 0; i < absValue; i++) {
				this.reducedResult.push(field);
			}
		},
		
		reduceAndReturnDirectionsArray: function() {
			this.reduceAndPush('NORTH', 'SOUTH');
			this.reduceAndPush('WEST', 'EAST');
			return this.reducedResult;
			
		},
		
		countReduceAndReturn: function(input) {
			this.count(input);
			return this.reduceAndReturnDirectionsArray();
		}
		/*
		reduceAndReturnDirections: function() {
			var absNorthSouth = Math.abs(this.NORTH - this.SOUTH);
			if (this.NORTH > this.SOUTH) {
				this.NORTH = absNorthSouth;
				this.SOUTH = 0;
			}
			else if (this.NORTH < this.SOUTH) {
				this.NORTH = 0;
				this.SOUTH = absNorthSouth;
			}
			else {
				this.NORTH = 0;
				this.SOUTH = 0;
			}
			
			var absEastWest = Math.abs(this.WEST - this.EAST);
			if (this.WEST > this.EAST) {
				this.WEST = absEastWest;
				this.EAST = 0;
			}
			else if (this.WEST < this.EAST) {
				this.WEST = 0;
				this.EAST = absEastWest;
			}
			else {
				this.WEST = 0;
				this.EAST = 0;
			}
		}
  } 
	obj.count(arr);
	
	obj.reduceAndReturnDirections();
  
  /*
  for (var i = 0; i < arr.length; i++) {
	  obj[arr[i]] += 1;
  }
  */
}
  
  obj.countReduceAndReturn(arr);
  return obj;
}


console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
//console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));


/*
function dirReduc(arr){
   var obj = {
	    reducedResult: [],
		NORTH: 0,
		SOUTH: 0,
		EAST: 0,
		WEST: 0,		
		count: function(input) {
			for (var i = 0; i < input.length; i++) {
				obj[input[i]] += 1;
			}		
		},
		reduceAndPush: function(first, second) {
      if (this[first] === 1 && this[second] === 1) {
				this.reducedResult.push(first);
				this.reducedResult.push(second);
				return;
			}
    
			var absValue = Math.abs(this[first] - this[second]);
			if (absValue === 0) {
				return;
			}
			var field = this[first] - this[second] ? first : second;
			for (var i = 0; i < absValue; i++) {
				this.reducedResult.push(field);
			}
		},
		
		reduceAndReturnDirectionsArray: function() {
			this.reduceAndPush('NORTH', 'SOUTH');
			this.reduceAndPush('WEST', 'EAST');
			return this.reducedResult;
			
		},
		
		countReduceAndReturn: function(input) {
			this.count(input);
			return this.reduceAndReturnDirectionsArray();
		}
    }
    
    obj.countReduceAndReturn(arr);
  return obj.reducedResult;
    
}
*/
