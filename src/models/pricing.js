const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize , DataTypes) => {
    const Pricing = sequelize.define ('Pricing',{
        organization_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        item_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        zone: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        base_distance:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        km_price:{
            type:DataTypes.DECIMAL(8,2),
            allowNull: false,
        },
        fix_price:{
            type:DataTypes.DECIMAL(8,2),
            allowNull:false,
        },
    
    });

    return Pricing;
} 