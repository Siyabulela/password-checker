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

module.exports = { logger }