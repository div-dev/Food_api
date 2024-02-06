const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"food_api",
    password: "130261",
    port: 5432,
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = pool;