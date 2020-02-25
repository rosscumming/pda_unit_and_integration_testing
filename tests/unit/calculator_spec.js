var Calculator = require("../../public/js/calculator.js");
var assert = require("assert");

describe("calculator", function() {
  beforeEach(function() {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it("it has a sample test", function() {
    assert.equal(true, true);
  });

  it("can add 1 to 4 totalling 5", () => {
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.strictEqual(5, calculator.runningTotal);
  });

  it("can subtract 4 from 7 equalling 3", () => {
    calculator.numberClick(7);
    calculator.operatorClick("-");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.strictEqual(3, calculator.runningTotal);
  });

  it("can multiply 3 by 5 equalling 15", () => {
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.strictEqual(15, calculator.runningTotal);
  });

  it("can divide 21 by 7 equalling 3", () => {
    calculator.numberClick(21);
    calculator.operatorClick("/");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.strictEqual(3, calculator.runningTotal);
  });

  it("can concatenate multiple number clicks", () => {
    calculator.numberClick(7);
    calculator.numberClick(4);
    calculator.numberClick(2);
    assert.strictEqual(742, calculator.runningTotal);
  });

  it("can chain multiple operations together", () => {
    calculator.numberClick(7);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.strictEqual(8, calculator.runningTotal);
  });

  it("can clear the running total without affecting the calculation", () => {
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.operatorClick("=");
    assert.equal(2, calculator.previousTotal);
  });
});
