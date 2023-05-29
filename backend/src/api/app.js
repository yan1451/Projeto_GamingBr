const express = require('express');
const restaurantesRouter = require('../database/routes/restaurantes');
const cors = require('cors');

const app = express();

const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(cors());
app.use(accessControl);
app.use(express.json());
app.use('/restaurantes', restaurantesRouter);

module.exports = app;
