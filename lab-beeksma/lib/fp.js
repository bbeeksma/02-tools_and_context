'use strict';


exports.nMap = (array, operator) => {
  return Array.prototype.map.call(array, operator);
};

exports.nFilter = (array, selector) => {
  return Array.prototype.filter.call(array, selector);
};

exports.nReduce = (array, magic) => {
  return Array.prototype.reduce.call(array, magic);
};

exports.nConcat = (array, array2) => {
  return Array.prototype.concat.call(array, array2);
};

exports.nSplice = (array, ...args) => {
  console.log(args);
  return Array.prototype.splice.apply(array,args);
};
