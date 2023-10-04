// import nextConfig from '../../next.config.js';
const nextConfig = require('../../next.config.js');
import pkg from 'pg';
const { Pool } = pkg;

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } =
  nextConfig.env;

let conn;

if (!conn) {
  conn = new Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
  });
}

export { conn };
