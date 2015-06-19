
function undoRedo(object) {

	var currentObject = object;
	var lastAction = null;

	function setValue(obj, x, y) {
		return function() {
			console.log('ppppppppp');
			console.log(obj, x, y);
			obj[x] = y
			console.log(obj);
			//return fn(x,y);
		}

	}

	return {
		set: function(key, value) {
			//get old value and create a closure/curry function and set to last action
			
			if(currentObject[key]) {
				//lastAction = curryPartial(currentObject, key, currentObject[key]);
				
				lastAction = setValue(currentObject, key, currentObject[key]);

				/*
				lastAction = function() {
					return function(obj) {
						obj[key] = currentObject[key];
					}
					
				}
				*/
			}

			//lastAction = curryPartial(currentObject, key, value);
			/*
			lastAction = function(obj, key, value) {
				return function() {
					console.log(obj, key, value);
					obj[key] = value;
				}
			}
			*/

			currentObject[key] = value;

			/*
			if (currentObject[key]) {
				lastAction = (function(obj, key, value) {
					return function() {
						obj[key] = value;
					}					
				})(currentObject, key, value);
			}*/
			//currentObject[key] = value;
		},
		get: function(key) {
			return currentObject[key];
		},
		del: function(key) {},
		undo: function() {
			console.log(lastAction.toString());
			lastAction.call(this, currentObject);
		},
		redo: function() {}
	};
}



(function() {

var obj = {
      x: 1,
      y: 2
    };

var unRe = undoRedo(obj);
console.log(unRe.get('x'));
unRe.set('x', 3);
console.log(unRe.get('x'));


})();

(function() {

var obj = {
        x: 1,
        y: 2
      };

var unRe = undoRedo(obj);
unRe.set('y', 10);

console.log(unRe.get('y'));

unRe.set('y', 99);

console.log(unRe.get('y'));

unRe.undo();
console.log(unRe.get('y'));




})();

console.log('---------------------');

var x = {};


function changeValue(obj, key, value) {
	//obj[key] = value;
	return function() {
		obj[key] = value;
	}
}

/*
var f = (function(obj, key, value) {
	return function(obj, key, value) {
		obj[key] = value;
	}
})(x, 'b', 44);

console.log(f);

f();
*/

var f = changeValue(x, 'a', 1);

console.log(x);

f();


function curryPartial(obj, x, y) {
	return function() {
		console.log('ppppppppp');
		console.log(obj, x, y);
		obj[x] = y
		console.log(obj);
		//return fn(x,y);
	}

}

curryPartial({}, 'xprop', 88)();










/*
function undoRedo(object) {

	var currentObject = object;
	var previousObject = null;

	console.log(currentObject);

	return {
		set: function(key, value) {
			if (!previousObject) {
				previousObject = {};
			}
			previousObject[key] = currentObject[key];
			currentObject[key] = value;
			//previousObject = currentObject;
			//currentObject[key] = value;
		},
		get: function(key) {
			return currentObject[key];
		},
		del: function(key) {
			if (!previousObject) {
				previousObject = {};
			}
			previousObject[key] = currentObject[key];
			currentObject[key] = null;
		},
		undo: function() {
			/*
			if (!previousObject) {
				throw Error('Cannot undo');
			}
			var temp = currentObject;
			currentObject = previousObject;
			previousObject = temp;
			*/
//		},
//		redo: function() {
			
//		}
//	};
//}






/*
function undoRedo(object) {

	var currentObject = object;

	var previousObject = null;

	return {
		set: function(key, value) {
			previousObject = currentObject;
			currentObject[key] = value;
		},
		get: function(key) {
			return currentObject[key];
		},
		del: function(key) {
			currentObject = {};
		},
		undo: function() {
			if (!previousObject) {
				throw Error('Cannot undo');
			}
			var temp = currentObject;
			currentObject = previousObject;
			previousObject = temp;
		},
		redo: function() {

		}
	};
}
*/
