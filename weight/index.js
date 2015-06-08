

//privileged
function Person(name) {
    // Create privileged methods here.
    //this.name = name;
    this._name = name;
    this.getName = function() {
      return this._name;
    }
    this.setName = function(name) {
      this._name = name;
    }
    
	/*
	return {
      getName: getName,
      setName: setName
    
    }
	*/
}

function Person1(name) {
    this.getName = function() {
      return name;
    }
    
    this.setName = function(value) {
      name = value;
    }
}




/*
function Person(name) {
    // Create privileged methods here.
    //this.name = name;
    this._name = name;
    function getName() {
      return this._name;
    }
    function setName(name) {
      this._name = name;
    }
    return {
      getName: getName,
      setName: setName
    
    }
}
*/



function Array2() {
	
	
	this.info = function() {
		console.log('array 2');
	}
	
	
}



function Array3() {
	
	var x = 999;
	
	function info() {
		console.log(999);
	}
	
	
	return {
		info: info
	}
	
	/*
	this.info = function() {
		console.log('xxx');
	}
	*/
	
}

/*
var Array2 = function() {
  // initialise the array
};
*/
// inherit from Array
Array2.prototype = new Array;

// add some sugar
Array2.prototype.each = function(iterator) {
  // iterate
};


function findSpecialIdxTest(vms) {
  // Solution requiring only a single weighing
  for (var i = 0; i < 10 ; i++) {
    console.log('i: ' + i);
	for (var j = 0; j < i; j++) {
      console.log('j: ' + j);
	  //vms[i].vend();
    }
  }
  return 'hey'; //vms.weigh() % 100;
};

//console.log(findSpecialIdxTest(null)); 


function findSpecialIdx(vms) {
  // Solution requiring only a single weighing
  for (var i = 0; i < 100 ; i++) {
    for (var j = 0; j < i; j++) {
      vms[i].vend();
    }
  }
  return vms.weigh() % 100;
};

var x = new Array2();

x.push(123);
x.push(456);

console.log(x);

console.log(x[0]);

x.info();

(new Array3()).info();


var p = new Person('test name');

console.log(p);

p.setName('xxxdsafafasf');

console.log(p.getName());


/*
function findSpecialIdx(vms) {
  // FIXME: This isn't a solution :(
  var prediction = 100;
  for (var i = 0 ; i < 100 ; i++) {
  console.log(i);
    vms[i].vend();
    if (vms.weigh() != prediction) return i;
    else prediction += 100;
  }
};
*/

/*
Description:

You are in a room with 100 vending machines, each one numbered 0 to 99. Each vending machine has 100 candy bars inside. For 99 of the vending machines, all of their candy bars weigh 100 grams, but one special machine has candy bars that weigh 101 grams.

Candy bars you vend are put into a pile, but you can only weigh the pile at most 10 times.

Determine the number of the machine with the heavy candy bars.
In this kata, you must solve this puzzle by coding the solution in the function findSpecialIdx.

The function takes a VendingMachines object; call it vms.

To make the ith machine vend, run vms[i].vend(); i can range from 0 to 99
To weigh the pile, run vms.weigh()
The index of the special machine is random, and different for each VendingMachines object. The function must return the index of the machine with the heavy candy bars.
*/