var isFromBellville = require('../isFromBellville');
var assert = require('assert');

describe("Function isFromBellville", function(){
  it("should return true if the input registration number starts with 'CY'", function(){
    assert.equal(true, isFromBellville('CY 777'));
  });
});
