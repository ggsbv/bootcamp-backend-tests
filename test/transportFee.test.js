const transportFee = require("../transportFee");
const assert = require("assert");

describe("Function transportFee", function(){
  it("should return 'R10'", function(){
    assert.equal('R10', transportFee("afternoon"));
  });
});
