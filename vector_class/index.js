//Vector class


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

  //var results = [];
  var total = 0;
  for (var i = 0; i < this.components.length; i++) {      
      total += this.components[i] * input.components[i];
      //results.push(this.components[i] * input.components[i]);
  }

  return total; //new Vector(results);
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
    //console.log(a);
    //console.log(b);
    throw Error('different length');
  }
};

Vector.prototype.toString = function() {
  return '(' + this.components.join() + ')';
}

Vector.prototype.output = function() {
  console.log(this.components);
};

Vector.prototype.equals = function(input) {

   //console.log(input);
  if (!input) {
     return false;
  }
  if (this.components.length !== input.components.length) {
    return false;
  }
  //this.test(this.components, input.components);
  for (var i = 0; i < this.components.length; i++) {      
      if (this.components[i] !== input.components[i]) {
        return false;
      }
  }
  return true;
}



var Vector = function (components) {
  this.items = components;
  this.length = components.length;
};

Vector.prototype = {
  do: function (action, vector) {
    if (vector.length !== this.length) { throw 'Different Length!'; }
    return new Vector(this.items.map(function (v, k) { 
      return eval(v + action + vector.items[k])
    }));
  },
  add: function (v) { return this.do('+', v); },
  subtract: function (v) { return this.do('-', v); },
  sum: function (v) { return eval(v.items.join('+')); },
  dot: function (v) { return this.sum(this.do('*', v)); },
  norm: function () { return Math.sqrt(this.dot(this)); },
  toString: function() { return '(' + this.items + ')'; },
  equals: function (v) { return this.toString() == v.toString(); }  
};






/*
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

Vector.prototype.toString = function() {
  return '(' + this.components.join() + ')';
}

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

*/



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
console.log(c.toString());

console.log(a.add(b)); 

console.log(a.add(b).equals(new Vector([4,6]))); 

a.output();