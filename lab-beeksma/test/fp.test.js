'use strict';

const { expect } = require('chai');
const arr = require('../lib/fp.js');

const testArray = [1,2,3];
const mapResults = [2,4,6];

describe('Functions with Call', function(){
  describe('#nMap', function(){
    it('should return new array',function(){
      let newArray = arr.nMap(testArray,function(x){return x*2;});
      console.log(newArray);
      expect(newArray).to.be.an('array');
      expect(newArray).to.be.deep.equal(mapResults);
    });
  });
});
