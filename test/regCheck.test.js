var regCheck = require('../regCheck');
var assert = require('assert');

describe("Function regCheck", function(){
  it("should return true if first argument ends with the string specified in the second argument", function(){
    assert.equal(true, regCheck('6004 GP', 'GP'));
  });
});
