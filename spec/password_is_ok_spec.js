const { passwordIsOk } = require("../src/password_checker");
 
describe("The function should return true if password passes or false if password fails", function () {
  it("should test if password exist", function () {
    expect(passwordIsOk(null)).toEqual(false);
  });
  it("should be longer than 8 characters", function () {
    expect(passwordIsOk("hello1234")).toEqual(true);
  });
  it("should meet at least 3 conditions", function () {
    expect(passwordIsOk("Vi@12")).toEqual(true);
  });
});
