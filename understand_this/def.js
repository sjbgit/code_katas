

function Deferred() {

	this.promise = new Promise();


	this.resolve = function(input) {
		this.promise.resolve();
	}
	this.reject = function(input) {
		this.promise.reject();
	}
}

function Promise() {

	var internal = {
		success: [],
		failure: []
	};

	this.resolve = function() {		
		internal.success.forEach(function(item) {
			item();
		});
		console.log('resolve');
	}
	this.reject = function() {
		internal.failure.forEach(function(item) {
			item();
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

	}
}




var d = new Deferred();
d.resolve();
d.reject();
//console.log(d);
var p = d.promise;
p.success(function() {
	console.log('promise passed in success');
});
p.failure(function() {
	console.log('promise passed in failure');
});

d.resolve();
d.reject();