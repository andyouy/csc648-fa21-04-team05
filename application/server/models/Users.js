const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("user", {
    name: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    username: {
        type: Sequelize.STRING(20),
        primaryKey: true,
        unique: true
    },
    email: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    usertype: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

},
    {
        createdAt: false,
        updatedAt: false
    }
);


module.exports = User;