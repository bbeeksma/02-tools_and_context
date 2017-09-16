'use strict';

const { expect } = require('chai');
const arr = require('../lib/fp.js');

const testArray = [1,2,3,4,5,6];
const testArray2 = [7,8,9,10,11,12];
const mapResults = [2,4,6,8,10,12];
const filterResults = [2,4,6];
const reduceResults = 21;
const concatResults = [1,2,3,4,5,6,7,8,9,10,11,12];
const spliceDeleted = [3,4];
const spliceDone = [1,2,'z','y',5,6,7,8,9,0];


describe('Functions with Call', function(){
  describe('#nMap', function(){
    it('should return new array',function(){
      let result = arr.nMap(testArray,function(x){return x*2;});
      console.log(result);
      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(mapResults);
    });
  });
  describe('#nFilter', function(){
    it('should return new array',function(){
      let result = arr.nFilter(testArray,function(x){return (x % 2 === 0);});
      console.log(result);
      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(filterResults);
    });
  });
  describe('#nReduce', function(){
    it('should return a single value',function(){
      let result = arr.nReduce(testArray,function(sum,value){return (sum + value);});
      console.log(result);
      expect(result).to.be.a('number');
      expect(result).to.be.equal(reduceResults);
    });
  });
  describe('#nConcat', function(){
    it('should return new array',function(){
      let result = arr.nConcat(testArray,testArray2);
      console.log(result);
      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(concatResults);
    });
  });
  describe('#nSplice', function(){
    it('should return new array',function(){
      let spliceArray  = [1,2,3,4,5,6,7,8,9,0];
      let deleted = arr.nSplice(spliceArray,2,2,'z','y');
      expect(deleted).to.be.an('array');
      expect(deleted).to.be.deep.equal(spliceDeleted);
      expect(spliceArray).to.be.an('array');
      expect(spliceArray).to.be.deep.equal(spliceDone);
    });
  });
});
