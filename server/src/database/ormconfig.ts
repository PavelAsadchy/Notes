import {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD
} from '../common/config';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

export default {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: +POSTGRES_PORT,
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  synchronize: false,
  logging: false,
  entities: [path.join(__dirname, '../entities/**/*.ts')],
  migrationsRun: true,
  migrations: [path.join(__dirname, '../migrations/**/*.ts')],
  cli: {
    entitiesDir: 'src/entities/**/*.ts',
    migrationsDir: 'src/migrations/**/*.ts'
  },
} as ConnectionOptions;