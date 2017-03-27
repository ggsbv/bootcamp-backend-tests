var countRegNumber = require('../countRegNumber');
var assert = require('assert');

describe("function countRegNumber", function(){
  it("should return 4", function(){
    assert.equal(4, countRegNumber("CY 777, CY 888, CJ 999, 555 GP"));
  });
});
