
const arr = require('./lib/fp.js');

var args = arr.nMap(process.argv, function(x){
  return x.toUpperCase();
});

console.log(args);
