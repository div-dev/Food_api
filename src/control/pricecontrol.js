const {calculateTotalPrice} = require('../service/priceCalculator');

async function calculateDeliveryCost(req,res){
    try{
        const{organization_id , total_distance ,  item_type} = req.body;
        const totalPrice = await calculateTotalPrice(organization_id,total_distance,item_type);
        res.json({total_price : totalPrice});
    }catch (error){
        console.error('Error calculating delivery cost : ' , error);
        res.status(500).json({error:'Internal server error'});

    }
}

module.exports = {calculateDeliveryCost};
