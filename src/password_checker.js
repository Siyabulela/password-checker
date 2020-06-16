var digits = /[0-9]/,
  uppercase = /[A-Z]/,
  lowercase = /[a-z]/,
  atLeastNineLettersLong = /.{9,}/,
  specialChar = /\W|_/;

function passwordIsValid(password) {
  if (password == null) {
    throw Error("password should exist");
  }
  if (!atLeastNineLettersLong.test(password)) {
    throw Error("password should be longer than 8 characters");
  }
  if (!lowercase.test(password)) {
    throw Error("password should have at least one lowercase letter");
  }
  if (!uppercase.test(password)) {
    throw Error("password should have at least one uppercase letter");
  }
  if (!digits.test(password)) {
    throw Error("password should at least have one digit");
  }
  if (!specialChar.test(password)) {
    throw Error("password should have at least one specialChar character");
  }
}

function passwordIsOk(password) {
  var conditionMetBoolean = false,
    countConditionsMet = 0;

  if (password != "") {
    countConditionsMet = countConditionsMet + 1;
  }
  if (atLeastNineLettersLong.test(password)) {
    countConditionsMet = countConditionsMet + 1;
  }
  if (lowercase.test(password)) {
    countConditionsMet = countConditionsMet + 1;
  }
  if (uppercase.test(password)) {
    countConditionsMet = countConditionsMet + 1;
  }
  if (digits.test(password)) {
    countConditionsMet = countConditionsMet + 1;
  }
  if (specialChar.test(password)) {
    countConditionsMet = countConditionsMet + 1;
  }
  if (countConditionsMet >= 3) {
    conditionMetBoolean = true;
  }
  if (password == "" && !atLeastNineLettersLong.test(password)) {
    conditionMetBoolean = false;
  }
  return conditionMetBoolean;
}

module.exports = { passwordIsValid, passwordIsOk };
