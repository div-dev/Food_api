const pool = require('../../db');

const getPrice = (req,res) => {
    pool.query("SELECT * FROM  organization", (error,results) =>{
       if (error) throw error;
       res.status(200).json(results.rows);
    });
};

module.exports = {
    getPrice,
};