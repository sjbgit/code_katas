function Deferred() {
  this.promise = new Promise();
  this.resolve = function(data) {
    // TODO
    //calls the promise object success function
    console.log('this is on resolve');
  //  console.log(JSON.stringify(this.promise.success));
    this.promise.success.call(this.promise);
  };
  this.reject = function(data) {
    //TODO
    this.promise.failure();
  };
  return this;
}

function Promise() {

	this._success = function() {};
	this._failure = function() {};

	this.success = function(successHandler) { this._success = successHandler;};
	this.failure = function(failureHander) { this._failure = failureHander;};
	this.then = function(successHandler, failureHander){
		this.success(successHandler);

		if (failureHander) {
			this.failure(failureHander);
		}
	};
}

var deferred = new Deferred();
console.log(JSON.stringify(deferred));
  var promise = deferred.promise;
  promise.success(function() {
    console.log("Success Handler Called");
  });
  promise.failure(function() {
   console.log("Failure Handler Called");
  });

//console.log(JSON.stringify(promise));
//console.log(promise);

  deferred.resolve("Success");



