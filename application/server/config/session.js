const session = require('express-session');
let mySQLStore = require('express-mysql-session')(session);

var options = {
    host: 'csc648db.clbgfu5wxlpu.us-west-1.rds.amazonaws.com',
    user: 'csc648team5',
    password: 'csc648team5',
    database: "csc648db"
};

var sessionStore = new mySQLStore(options);

module.exports = sessionStore