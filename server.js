const express = require('express');
require('dotenv').config();
const pricingroute = require('./src/routes/pricingRoute');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello");
});
app.use('/api/v1/food', pricingroute);
app.listen(port, () => console.log(`app listening on ${port}`));
