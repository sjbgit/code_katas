

function Deferred() {

	var hasBeenCalled = false;

	this.promise = new Promise();

	this.resolve = function(data) {
		failOrCall(this.promise.resolve, data);
		//var f = (function() {
		//	this.promise.resolve(data);
		//});
		//failOrCall(f);
		//failOrCall(this.promise.resolve(data));
		//this.promise.resolve(data);
		//hasBeenCalled = true;
	}
	this.reject = function(data) {
		failOrCall(this.promise.reject, data);
		//this.promise.reject(data);
		//hasBeenCalled = true;
	}

	function failOrCall(input, data) {
		if (!hasBeenCalled) {
			input();
			hasBeenCalled = true;
		}
		else {
			throw "Resolve or reject has already been called";
		}
	}
}

function Promise() {

	var internal = {
		success: [],
		failure: []
	};

	this.resolve = function(data) {		
		internal.success.forEach(function(item) {
			item(data);
		});
		console.log('resolve');
	}
	this.reject = function(data) {
		internal.failure.forEach(function(item) {
			item(data);
		});
		console.log('reject');
	}
	this.success = function(input) {
		internal.success.push(input);
		console.log('success');
	}
	this.failure = function(input) {
		internal.failure.push(input);
		console.log('failure');
	}
	this.then = function(successHandler, failureHandler) {
		if (successHandler) {
			this.success(successHandler);
		}
		if (failureHandler) {
			this.failure(failureHandler);  
		}
	}
}




var d = new Deferred();
//d.resolve();
//d.reject();
//console.log(d);
var p = d.promise;
p.success(function() {
	console.log('promise passed in success');
});
p.failure(function() {
	console.log('promise passed in failure');
});

p.then(function() {console.log('success from then');}, function(){console.log('fail from then')});

d.resolve();

try {
	d.reject();
}
catch (e) {
	console.log('in catch: ' + e);
}


console.log('test');  
console.log(p);