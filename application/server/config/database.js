const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 50,
    host: 'csc648db.clbgfu5wxlpu.us-west-1.rds.amazonaws.com',
    user: 'csc648team5',
    password: 'csc648team5',
    database: "csc648db"
});

const promisePool = pool.promise();

module.exports = promisePool;