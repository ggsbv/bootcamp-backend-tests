var isWeekday = require('../isWeekday');
var assert = require('assert');

describe('Function isWeekday', function(){
  it("should return true if the input day is a weekday", function(){
    assert.equal(true, isWeekday("Monday"));
  });
});
