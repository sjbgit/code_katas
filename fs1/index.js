    var fs = require('fs');


fs.writeFile('message_out.txt', 'Hello Node sdfsd', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});




require('fs').writeFile('1page.txt','JSON.stringify(page)', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});