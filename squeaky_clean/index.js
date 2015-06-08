

function squeakyClean(arr) {  
  return arr.filter(function(value) {
    return (value !== '' && value !== 0 && value !== undefined && value !== null);
  })
}

/*
function squeakyClean(arr) {
  return arr.filter(Boolean);
}

*/

/*
function squeakyClean(arr) {
  return arr.filter(function(a){ return !!a; });
}

*/



console.log(squeakyClean([1,2,3,-1,1.1]));


