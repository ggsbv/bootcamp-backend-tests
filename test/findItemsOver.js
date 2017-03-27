const expectedResults = [
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27}
];
const findItemsOver = require("../findItemsOver");
const assert = require("assert");
const dataList = require("./findItemsOverDataList");

describe("Function findItemsOver", function(){
  it("should return expectedResults", function(){
    assert.deepEqual(expectedResults, findItemsOver(dataList, 20))
  });
});
