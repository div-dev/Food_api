const express =require('express');
const calculateDeliveryCost = require('../control/pricecontrol');
const router = express.Router();

router.post('/calculate-cost', calculateDeliveryCost);


module.exports = router;