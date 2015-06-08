function runYourString (arg, obj) {

     return new Function(obj.param, obj.func)(arg);

	//var num = arg;
	//return (new Function('(function(' + obj.param + ') {' + obj.func + '}(arg))'))(arg);
	//return eval('(function(' + obj.param + ') {' + obj.func + '}(arg))');

  //your code here
}

var arg = 4,                         // arg for "string" function call
    obj = {
      param: 'num',                  // parameter name for function in string  
      //func: '(return 2)'
      func: 'return Math.sqrt(num)'  // function that need call with arg var
    };




console.log(runYourString(arg, obj));



/*

function discoverOriginalPrice(discountedPrice, salePercentage){
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}


*/