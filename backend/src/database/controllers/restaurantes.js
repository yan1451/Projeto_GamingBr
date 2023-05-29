const service = require('../services/restaurantes');
const serviceHorarios = require('../services/horarios');

const criarRestaurantes = async (req, res, next) => {
  try {
    
    const { data } = req.body;

    if(data.name === "" && data.tipo === "") return res.status(400).json({ message: 'Campos incorretos'});

    const novoRestaurante = await service.criarRestaurantes(data);    
  
    const restauranteId = novoRestaurante.dataValues.id;

    await serviceHorarios.criarHorarioDeFuncionamento({ ...data, restauranteId });

    if (!novoRestaurante) {
      return res.status(400).json({ message: 'algo deu errado' });
    }
    return res.status(200).json({ novoRestaurante });
  } catch (error) {
    console.log(error);
    next(error)
  }
}

const obterRestaurante = async (req, res, next) => {
  try {
    const { name } = req.body;
    const restauranteExistente = await service.obterRestaurante(name);
    if(restauranteExistente) return res.status(200).json(restauranteExistente);
    return res.status(404).json({ message: 'Not Found!'});
  } catch (error) {
    next(error);
  }
}

module.exports = {
  criarRestaurantes,
  obterRestaurante
}