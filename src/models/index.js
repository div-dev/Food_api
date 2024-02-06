const Sequelize = require('sequelize');
const {DB_HOST,DB_USER,DB_PASSWORD,DB_NAME} = process.env;


const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host : DB_HOST,
    dialect : 'postgres',
});

const Organization = require('./organization')(sequelize, Sequelize);
const Item = require('./item')(sequelize , Sequelize);
const Pricing = require ('./pricing')(sequelize,Sequelize);

Organization.hasMany(Pricing,{foreihnKey: ' organization_id'});
Item.hasMany(Pricing ,{foreihnKey : 'item_id'});

modeule.exports = {sequelize , Organization , Item , Pricing};


