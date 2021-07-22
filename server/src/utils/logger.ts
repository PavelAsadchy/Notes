import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  level: 'debug',
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.cli(),
      )
    }),
    new transports.File({
      filename: './logs/debug.log'
    }),
    new transports.File({
      filename: './logs/error.log',
      level: 'error',
      format: format.json()
    })
  ]
});

export const log = (message: string): void => {
  logger.debug(message);
};

export const errorLog = (message: string): void => {
  logger.error(message);
};