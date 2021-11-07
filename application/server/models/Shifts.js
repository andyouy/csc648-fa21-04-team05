const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Shifts = sequelize.define("shifts", {
    shiftID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    location: {
        type: Sequelize.STRING(64),
        allowNull: false
    },
    time: {
        type: Sequelize.STRING(45),
        allowNull:false
    },
    date: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    createdBy: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    claimedBy: {
        type: Sequelize.STRING(45),
        allowNull: true
    }

},
    {
        createdAt: false,
        updatedAt: false
    }
);

module.exports = Shifts;