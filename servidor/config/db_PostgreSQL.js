// const { Pool } = require("pg")
// // Coloca aquí tus credenciales
// const pool = new Pool({
//   user: "postgres",
//   host: "127.0.0.1",
//   database: "Birreando",
//   password: "Postgre2020",
//   port: 5432,
// });
// module.exports = pool;


const pgp = require('pg-promise')({
    // Initialization Options
});

// Preparing the connection details:
const cn = 'postgres://postgres:Postgre2020@127.0.0.1:5432/Birreando';

// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;