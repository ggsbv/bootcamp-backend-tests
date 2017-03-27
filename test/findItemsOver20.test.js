const itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
const expectedResults = [
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27}
];

const findItemsOver20 = require("../findItemsOver20");
const assert = require("assert");

describe("Function findItemsOver20", function(){
  it("should return expectedResults", function(){
    assert.deepEqual(expectedResults, findItemsOver20(itemList));
  });
});
