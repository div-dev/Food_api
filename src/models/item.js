const  {Sequelize , DataTypes}  = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Item = sequelize.define('Item',{
        type:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        }
    });
    return Item;
};