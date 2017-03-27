var greet = require("../greet");
var assert = require("assert");

describe("Greet function", function(){
  it("Should greet Sandro correctly", function(){
    assert.equal("Hello, Sandro", greet("Sandro"));
  });
});
