'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class restaurantes extends Model { }

  restaurantes.init({
    name: DataTypes.STRING,
    documento: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'restaurantes',
  });
  
  return restaurantes;
};