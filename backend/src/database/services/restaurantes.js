const { restaurantes } = require('../models');
const { horarios } = require('../models');

const criarRestaurantes = async ({name, documento, tipo}) => {
 const novoRestaurante = await restaurantes.create({name, documento, tipo});
 return novoRestaurante;
}

const obterRestaurante = async (name) => {
  const restaurante = await restaurantes.findAll({ where: { name },
  include: {
    model: horarios,
    as: 'horarios',
    attributes: {
      exclude: ["id", "restaurante_id"]
    }
  }});
  return restaurante;
}

module.exports = {
  criarRestaurantes,
  obterRestaurante
}