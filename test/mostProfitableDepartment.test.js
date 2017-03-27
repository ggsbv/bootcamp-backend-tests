const data = require("./mostProfitableDepartmentData");
const mostProfitableDepartment = require("../mostProfitableDepartment");
const assert = require("assert");

describe("Function mostProfitableDepartment", function(){
  it("should return 'outdoor'", function(){
    assert.deepEqual('outdoor', mostProfitableDepartment(data))
  });
});
