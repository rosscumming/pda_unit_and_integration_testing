const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

describe("calculator functionality", function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get("http://localhost:3000");
  });

  // write integration tests here in the form of "it should do something..."
  it("should have working number buttons", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("2");
  });

  it("should update the display after doing the calculation", () => {
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("3");
  });

  it("can chain multiple operators together", () => {
    running_total = element(by.css("#running_total"));
    element(by.css("#number3")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number1")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("4");
  });

  it("can display negative numbers", () => {
    running_total = element(by.css("#running_total"));
    element(by.css("#number5")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number6")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("-1");
  });

  it("can display decimal numbers", () => {
    running_total = element(by.css("#running_total"));
    element(by.css("#number3")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("0.75");
  });

  it("can display very large numbers", () => {
    running_total = element(by.css("#running_total"));
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal(
      "9999800001"
    );
  });

  it("should return as NaN when dividing by zero", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number4")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("NaN");
  });
});
