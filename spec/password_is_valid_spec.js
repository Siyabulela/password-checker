const { passwordIsValid } = require("../src/password_checker");

describe("The function should throw an error if the password is not valid", function () {
  it("should test if password exist", function () {
    expect(function () {
      passwordIsValid(null);
    }).toThrow(new Error("password should exist"));
  });
  it("should be longer than 8 characters", function () {
    expect(function () {
      passwordIsValid("Siyabule");
    }).toThrow(new Error("password should be longer than 8 characters"));
  });
  it("should have at least one lowercase letter", function () {
    expect(function () {
      passwordIsValid("SIYABULELA");
    }).toThrow(new Error("password should have at least one lowercase letter"));
  });
  it("should have at least one uppercase letter", function () {
    expect(function () {
      passwordIsValid("siyabulela");
    }).toThrow(new Error("password should have at least one uppercase letter"));
  });
  it("should at least have one digit", function () {
    expect(function () {
      passwordIsValid("Siyabulela");
    }).toThrow(new Error("password should at least have one digit"));
  });
  it("should have at least one specialChar character", function () {
    expect(function () {
      passwordIsValid("12aU345678");
    }).toThrow(
      new Error("password should have at least one specialChar character")
    );
  });
});
