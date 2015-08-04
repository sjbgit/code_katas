var util = require('util'),
    fs = require('fs');



var x = {

    a: 'first',
    b: 'second'

}


var keys = Object.keys(x);

console.log(fs);


fs.writeFile('message.txt', 'Hello Node sdfsd', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});