const winston = require("winston");
const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console({level: 'debug'}),
    new winston.transports.File({ filename: "log/error.log", level: "error" }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'log/error.log'})
  ]
});

let digits = /[0-9]/,
  uppercase = /[A-Z]/,
  lowercase = /[a-z]/,
  atLeastNineLettersLong = /.{9,}/,
  specialChar = /\W|_/;

function passwordIsValid(password) {
  if (password == null) {
    logger.error("password should exist");
    throw Error("password should exist");
  }
  if (!atLeastNineLettersLong.test(password)) {
    logger.error("password should be longer than 8 characters");
    throw Error("password should be longer than 8 characters");
  }
  if (!lowercase.test(password)) {
    logger.error("password should have at least one lowercase letter");
    throw Error("password should have at least one lowercase letter");
  }
  if (!uppercase.test(password)) {
    logger.error("password should have at least one uppercase letter");
    throw Error("password should have at least one uppercase letter");
  }
  if (!digits.test(password)) {
    logger.error("password should at least have one digit");
    throw Error("password should at least have one digit");
  }
  if (!specialChar.test(password)) {
    logger.error("password should have at least one specialChar character");
    throw Error("password should have at least one specialChar character");
  }
}

function passwordIsOk(password) {
  var conditionMetBoolean = false,
    countCounditionsMet = 0;

  if (password != "" && password != null) {
    countCounditionsMet++;
  }
  if (atLeastNineLettersLong.test(password)) {
    countCounditionsMet++;
  }
  if (lowercase.test(password)) {
    countCounditionsMet++;
  }
  if (uppercase.test(password)) {
    countCounditionsMet++;
  }
  if (digits.test(password)) {
    countCounditionsMet++;
  }
  if (specialChar.test(password)) {
    countCounditionsMet++;
  }
  if (password == "" && !atLeastNineLettersLong.test(password)) {
    conditionMetBoolean = false;
  }

  if (countCounditionsMet > 2) {
    conditionMetBoolean = true;
    logger.debug("User password is ok");
  } else {
    logger.debug("User password is not ok");
  }
  return conditionMetBoolean;
} 

module.exports = { passwordIsValid, passwordIsOk };
