const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes)=> { 
    const Organization = sequelize.define('organization',{
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Organization;
};