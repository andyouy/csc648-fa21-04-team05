const Sequelize  = require("sequelize");


const sequelize = new Sequelize("csc648db", "csc648team5", "csc648team5", {
    dialect: "mysql",
    host: 'csc648db.clbgfu5wxlpu.us-west-1.rds.amazonaws.com'
});


module.exports = sequelize;