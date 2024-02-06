const {Router} =require('express');
const pricecontrol = require('../control/pricecontrol');
const router = Router();

router.get('/', () => pricecontrol.getPrice);


module.exports = router;