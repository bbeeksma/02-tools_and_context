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
