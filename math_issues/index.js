Math.round = function(number) {
  var rem = number % 1;
  var minusRemainder = number - rem;  
  return rem >= .5 ? minusRemainder + 1 : minusRemainder; //0; // TODO: fix this
};

Math.ceil = function(number) {
  var rem = number % 1;
  var minusRemainder = number - rem;
  return minusRemainder + 1; // TODO: fix this
};

Math.floor = function(number) {
  return number - (number % 1); // TODO: fix this
};

console.log(Math.floor(0.4));

Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};