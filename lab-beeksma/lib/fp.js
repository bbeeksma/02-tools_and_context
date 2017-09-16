'use strict';


exports.nMap = (array, operator) => {
  return Array.prototype.map.call(array, operator);
};
