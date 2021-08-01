import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

export const {
  PORT,
  NODE_ENV,
  JWT_SECRET_KEY,
  AUTH_MODE,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  MAX_RECONNECT_COUNT
} = process.env;
