function cakes(recipe, available) {
  
	var min = -1;
  // TODO: insert code
 	for (var name in recipe) {
  		if (recipe.hasOwnProperty(name)) {
    		//alert('this is fog (' + name + ') for sure. Value: ' + buz[name]);
    		var result = !available[name] ? 0 : Math.floor(available[name] / recipe[name]);
    		/*
    		if (result < 1) {
    			return 1;
    		}
			*/
    		if (min === -1) {
    			min = result;
    		}
    		else if (result < min) {
    			min = result;
    		}


  		}
  
	}

	return min;
}



function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}


var recipe = {flour: 500, sugar: 200, eggs: 1};
var available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
 console.log(cakes(recipe, available));

var div = 3 / 4;
 console.log(Math.floor(div));


var recipe1 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
var available1 = {sugar: 500, flour: 2000, milk: 2000};

console.log(cakes(recipe1, available1));

console.log(available1['apples']);