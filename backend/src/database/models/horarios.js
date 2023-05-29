'use strict';
const { STRING, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Horarios = sequelize.define('horarios', {
    segunda: {type: STRING},
    terça: {type: STRING},
    quarta: {type: STRING},
    quinta: {type: STRING},
    sexta: {type: STRING},
    sábado: {type: STRING},
    domingo: {type: STRING},
    restaurante_id: {type: INTEGER}
  }, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'horarios',
  });

  Horarios.associate = (models) => {
    
  Horarios.belongsTo(models.restaurantes, {
    foreignKey: 'restaurante_id',
    as: 'restaurantes'
  });
}

  return Horarios;
};