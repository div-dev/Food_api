const express = require('express');
const pricingroute = require('./src/routes/pricingRoute');
const app = express();
const port = 3000;

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello");
});
app.get('/api/v1/food', pricingroute);
app.listen(port, () => console.log(`app listening on ${port}`));
