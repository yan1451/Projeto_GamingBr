const { restaurantes } = require('../models');

const criarRestaurantes = async ({nome, documento, tipo}) => {
 const novoRestaurante = await restaurantes.create({name: nome, documento, tipo});
 return novoRestaurante;
}

module.exports = {
  criarRestaurantes,
}