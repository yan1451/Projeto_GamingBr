'use strict';
const { STRING } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Restaurantes = sequelize.define('restaurantes', {
    name: {type: STRING},
    documento: {type: STRING},
    tipo: {type: STRING }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'restaurantes',
  });

  Restaurantes.associate = (models) => {
    Restaurantes.belongsTo(models.horarios, {
      foreignKey: 'id',
      as: 'horarios'
    });
  }
  
  return Restaurantes;
};