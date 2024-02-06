const express = require('express');
const pricingRoute = require('./src/routes/pricingRoute');

const app = express();

app.use(express.json());
app.use('/api/v1/food',pricingRoute);

app.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = app;