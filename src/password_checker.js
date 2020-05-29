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
    countCounditionsMet = 0;

  if (password != "") {
    countCounditionsMet = countCounditionsMet + 1;
  }
  if (atLeastNineLettersLong.test(password)) {
    countCounditionsMet = countCounditionsMet + 1;
  }
  if (lowercase.test(password)) {
    countCounditionsMet = countCounditionsMet + 1;
  }
  if (uppercase.test(password)) {
    countCounditionsMet = countCounditionsMet + 1;
  }
  if (digits.test(password)) {
    countCounditionsMet = countCounditionsMet + 1;
  }
  if (specialChar.test(password)) {
    countCounditionsMet = countCounditionsMet + 1;
  }
  if (countCounditionsMet >= 3) {
    conditionMetBoolean = true;
  }
  if (password == "" && !atLeastNineLettersLong.test(password)) {
    conditionMetBoolean = false;
  }
  return conditionMetBoolean;
}

module.exports = { passwordIsValid, passwordIsOk };
