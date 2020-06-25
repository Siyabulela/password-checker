const { passwordIsOk } = require("../src/password_checker");

describe("The function 'passwordIsOk' should return true if password passes or false if password fails", function () {
  it("should test if password exist", function () {
    expect(passwordIsOk(null)).toEqual(false);
  });
  it("should be longer than 8 characters", function () {
    expect(passwordIsOk("hellov")).toEqual(false);
  });
  it("should test if password have at least one lowercase letter", function () {
    expect(passwordIsOk("VisualStudio")).toEqual(true);
  });
  it("should test if password have at least one uppercase letter", function () {
    expect(passwordIsOk("He11@World!")).toEqual(true);
  });
  it("should test if password have at least one digit", function () {
    expect(passwordIsOk("He11@World")).toEqual(true);
  });
  it("should test if password have at least one special character", function () {
    expect(passwordIsOk("HelloW@rld")).toEqual(true);
  });
  it("should test if strength is less than 3 or password is less than 9 characters", function () {
    expect(passwordIsOk("Siyabulq@0")).toEqual(true);
  });
});
