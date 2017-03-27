const countAllFromTown = require("../countAllFromTown");
const assert = require("assert");

describe("Function countAllFromTown", function(){
  it("should return 3", function(){
    assert.equal(3, countAllFromTown("CY 666, CJ 888, CY 333, CY 897", "CY"));
  });
});
