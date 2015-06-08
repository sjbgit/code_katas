var myFunction = function() {
	//this is the containing window
	//console.log(this);

	console.log(this.process.version);
}

//myFunction();


//in an object literal, this always refers to its own object
var myObject = {
	showThis : function() { console.log(this);}
};

myObject.someMethod = function() {
	console.log(this)//this is myobject
}

//here our window object did not invoke the function, our object did
//myObject.someMethod();



var myConstructor = function() {
	this.info = 'myConstructor';
	this.someMethod = function() {
		console.log(this); //this refers to myConstructor
	}
}

myConstructor.prototype = {
	somePrototypeMethod : function() {
		console.log(this); //this refers to myConstructor
	}
}

/*
var a = new myConstructor();
a.someMethod();
a.somePrototypeMethod();
*/


var numbers = [{
  name: 'Mark'
},{
  name: 'Tom'
},{
  name: 'Travis'
}];
for (var i = 0; i < numbers.length; i++) {
  logInfo(i + ' ' + numbers[i].name);
  /*
  (function () {
    console.log(this.name); // Mark, Tom, Travis
  }).call(numbers[i]);
*/
}

function logInfo(info) {
	console.log(info);
}









function A() {
	this.aLog = function() {console.log(this);};
}

function B() {
	this.bLog = function() {console.log(this);};
	this.test = function() {
		var a = new A();
		a.aLog();
	}
}

/*
var b = new B();
b.test();
b.bLog();
*/


