import { Pool } from 'pg';
let conn;
if (!conn) {
  conn = new Pool({
    user: 'postgres',
    password: '123',
    host: 'localhost',
    port: 5432,
    database: 'enchufando'
  });
}

export default conn;
