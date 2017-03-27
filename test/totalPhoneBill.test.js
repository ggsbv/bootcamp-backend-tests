const testString = 'call, sms, call, sms, sms';
const totalPhoneBill = require("../totalPhoneBill");
const assert = require("assert");

describe("Function totalPhoneBill", function(){
  it("should return 'R7.45'", function(){
    assert.equal("R7.45", totalPhoneBill(testString));
  });
});
