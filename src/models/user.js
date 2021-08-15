'use strict'


const Users =(sequelize, DataTypes)=>sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true // CONSTRAINT
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports=Users