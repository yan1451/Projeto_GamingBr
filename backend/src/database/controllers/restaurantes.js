const service = require('../services/restaurantes');
const serviceHorarios = require('../services/horarios');

const criarRestaurantes = async (req, res, next) => {
  try {
    const novoRestaurante = await service.criarRestaurantes(req.body);

    const restauranteId = novoRestaurante.dataValues.id;

    await serviceHorarios.criarHorarioDeFuncionamento({ ...req.body, restauranteId });

    if (!novoRestaurante) {
      return res.status(400).json({ message: 'algo deu errado' });
    }
    return res.status(200).json({ novoRestaurante });
  } catch (error) {
    next(error)
  }
}

module.exports = {
  criarRestaurantes,
}