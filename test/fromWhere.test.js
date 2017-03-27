const fromWhere = require("../fromWhere");
const assert = require("assert");

describe("Function fromWhere", function(){
  it("should return 'Cape Town'", function(){
    assert.equal("Cape Town", fromWhere("CA 555"));
  });
});
