
function undoRedo(object) {

	var currentObject = object;
	var undoAction = [];
	var redoAction = [];

	function setValue(obj, key, value) {
		return function() {
			console.log('ppppppppp');
			console.log(obj, key, value);
			obj[key] = value;
			console.log(obj);			
		}

	}

	function deleteValue(obj, key, value) {
		return function() {			
			delete obj[key];
		}

	}

	return {
		set: function(key, value) {			
			undoAction.push(setValue(currentObject, key, currentObject[key]));		
			currentObject[key] = value;
		},
		get: function(key) {
			return currentObject[key];
		},
		del: function(key) {		
			undoAction.push(setValue(currentObject, key, currentObject[key]));
			delete currentObject[key];
			console.log('del');
		},
		undo: function() {
			
			if (!undoAction.length > 0) {
				throw Error('undo does not exist');
			}

			//get the action, then push it on to the redo and execute
			var action = undoAction.pop()
			redoAction.push(action);
			action.call(this, currentObject);
		},
		redo: function() {
			redoAction.pop().call(this, currentObject); 
		}
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


})
//();

(function() {

var obj = {
        x: 1,
        y: 2
      };


console.log('set to 10')
var unRe = undoRedo(obj);
unRe.set('y', 10);
console.log(unRe.get('y'));

console.log('set to 99')
unRe.set('y', 99);
console.log(unRe.get('y'));

console.log('undo to 10')
unRe.undo();
console.log(unRe.get('y'));

console.log('redo to 99')
unRe.redo();
console.log(unRe.get('y'));




})
//();

/*
(function(message) {

	console.log(message);
	var obj = { 'g': 10};



	var unRe = new undoRedo(obj);
	console.log(unRe.get('g'));
	
	unRe.del('g');
	console.log(unRe.get('g'));

	unRe.undo();
	console.log('undone ' + unRe.get('g'));


})('delete an property then undo and redo');

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

/*

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




var delo = {
	h: 123
}

delete delo['h'];

console.log(delo['h']);







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
