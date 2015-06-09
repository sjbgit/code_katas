//Vector class

var Vector = function (components) {
  // TODO: Finish the Vector class.
  this.components = components;
};

Vector.prototype.add = function(input) {  
  this.test(this.components, input.components);

  var results = [];
  for (var i = 0; i < this.components.length; i++) {      
      results.push(this.components[i] + input.components[i]);
  }

  return new Vector(results);
};

//refactor so that pass in a function? + - *

Vector.prototype.subtract = function(input) {  
  this.test(this.components, input.components);

  var results = [];
  for (var i = 0; i < this.components.length; i++) {      
      results.push(this.components[i] - input.components[i]);
  }

  return new Vector(results);
};

Vector.prototype.dot = function(input) {  
  this.test(this.components, input.components);

  var results = [];
  for (var i = 0; i < this.components.length; i++) {      
      results.push(this.components[i] * input.components[i]);
  }

  return new Vector(results);
};

Vector.prototype.norm = function() {  
  var total = 0;
  for (var i = 0; i < this.components.length; i++) {      
      total += Math.pow(this.components[i], 2);
  }
  return Math.sqrt(total);  
};

Vector.prototype.test = function(a, b) {
  if (a.length !== b.length) {
    throw Error('different length');
  }
};

Vector.prototype.output = function() {
  console.log(this.components);
};

Vector.prototype.equals = function(input) {
  this.test(this.components, input.components);
  for (var i = 0; i < this.components.length; i++) {      
      if (this.components[i] !== input.components[i]) {
        return false;
      }
  }
  return true;
}





/*
function Vector (components) {
  
  var test = function(a, b) {
    console.log('---------------');
    console.log(a.length);
    console.log(b.length);
    if (a.length !== b.length) {
      throw Error('vector different sizes');
    }
  }
  // TODO: Finish the Vector class.
  this.components = components;

  this.length = this.components.length;
  
  this.add = function(input) {
    console.log('---------------');
    test(components, input);
    var results = [];
    for (var i = 0; i < this.length; i++) {
      var cval = this.components[i];
      var ival = input[i];
      console.log(cval + ' ' + ival);
      results.push(this.components[i] + input[i]);
    }
    return results;
  }
};
*/

var a = new Vector([1,2]);
var b = new Vector([3,4]);

var c = new Vector([1,2,3]);
console.log(c.norm());

console.log(a.add(b)); 

console.log(a.add(b).equals(new Vector([4,6]))); 

a.output();