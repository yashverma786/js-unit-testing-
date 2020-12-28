var util = require("./util.js");
var example = require("./example.js");
var deepFreeze = require("deep-freeze"); //es5 format
//import deepFreeze from "deep-freeze"          in es2015 format

describe("Array crud test cases", () => {
  //describe block ye btata h ki konse test cases ek dusre ke sath related hai
  test("any name of of test", function () {
    var result = util.sum(2, 3);
    var expcted = 5;
    expect(result).toBe(expcted);
  });

  //*************************************************testing in array************************************** */
  //testing in mutable array
  test("additem to list", function () {
    var jslib = ["React", "js"];
    var result = util.addItemtoList(jslib, "jest");
    var expected = ["React", "js", "jest"];
    expect(result).toStrictEqual(expected);
  });

  //testing in immutable array
  test("additem to list", function () {
    var jslib = ["React", "js"];
    deepFreeze(jslib);
    var result = util.addItemtoListimutable(jslib, "jest");
    var expected = ["React", "js", "jest"];
    expect(result).toEqual(expected);
  });

  //remove item from mutable array
  test("additem to list", function () {
    var jslib = ["React", "js"];
    // deepFreeze(jslib);
    var result = util.removeitem(jslib, 1);
    var expected = ["React"];
    expect(result).toEqual(expected);
  });

  //remove item from immutable array
  test("additem to list", function () {
    var jslib = ["React", "js"];
    deepFreeze(jslib);
    var result = util.removeitemfromarray(jslib, 1);
    var expected = ["React"];
    expect(result).toEqual(expected);
  });

  //update item from mutable array
  test("update item to list", function () {
    var jslib = ["React", "js"];
    // deepFreeze(jslib);
    var result = util.updateitem(jslib, 1, "redux");
    var expected = ["React", "redux"];
    expect(result).toEqual(expected);
  });

  //update item to immuable array
  test("update item to list", function () {
    var jslib = ["React", "js"];
    deepFreeze(jslib);
    var result = util.updateitemtoarray(jslib, 1, "redux");
    var expected = ["React", "redux"];
    expect(result).toEqual(expected);
  });
});
//----------------------------------------------------------------------------------------------------------------------
//*****************************testing in objects***************************************************************** */
//mutable form
describe("Objects testing cases", () => {
  test("Add property to object", () => {
    var person = { age: 25 };
    // deepFreeze(person);
    var result = util.addnewpropertytoobject(person, "yash");
    var expected = { name: "yash", age: 25 };
    expect(result).toEqual(expected);
  });
});

//immutable form
describe("Objects testing cases", () => {
  test("Add property to object", () => {
    var person = { age: 25 };
    deepFreeze(person);
    var result = util.addnewpropertytoobjects(person, "yash");
    var expected = { name: "yash", age: 25 };
    expect(result).toEqual(expected);
  });
});

//describe block ye btata h ki konse test cases ek dusre ke sath related hai
test("any name of of test", function () {
  var result = example.diff(3, 2);
  var expcted = 1;
  expect(result).toBe(expcted);
});
//---------------------------------------------------------------------------------------------------------------------------
//****************************snapshot testing**************************************************************************************** */
test("any name of of test", function () {
  var result = util.sum(2, 2);
  //  var expcted = 5;
  expect(result).toMatchSnapshot();
});
