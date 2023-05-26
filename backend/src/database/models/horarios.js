'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class horarios extends Model {}

  horarios.init({
    segunda: DataTypes.STRING,
    terca: DataTypes.STRING,
    quarta: DataTypes.STRING,
    quinta: DataTypes.STRING,
    sexta: DataTypes.STRING,
    sabado: DataTypes.STRING,
    domingo: DataTypes.STRING,
    restaurante_id: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'horarios',
  });


  horarios.associate = (models) => {
  models.restaurantes.belongsTo(models.horarios, {
    foreignKey: 'id',
    as: 'RestauranteId'
  });

  models.horarios.belongsTo(models.restaurantes, {
    foreignKey: 'restaurante_id',
    as: 'RestauranteId'
  });
}

  return horarios;
};