function Foo(who) {
	this.me = who;
}

Foo.prototype.identify = function() {
	return 'I am ' + this.me; // a1 or a2 depending on the instance
}

function Bar(who) {
	Foo.call(this,who); 
}

Bar.prototype.speak = function() {
	alert('Hello: ' + this.identify() + '.');
}
	
var b1 = new Bar('b1'); //b1 linked to Bar, Bar linked to Foo

console.log(b1);


//Bar.prototype = new Foo(); //inherit from foo



var x = new TestBind();

Test.bind(x)();





function TestBind() {
	this.info = 'in bind';
	this.output = function() {
		console.log('xxx');
	};
}


function Test() {
	this.output();

	/*
	this.doIt = function() {



	}
	*/


}




