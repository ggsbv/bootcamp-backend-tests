const yearsAgo = require("../yearsAgo");
const assert = require("assert");

describe("Function yearsAgo", function(){
  it("should return 10", function(){
    assert.equal(10, yearsAgo(2007));
  });
});
