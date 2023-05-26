const { horarios } = require('../models');

const criarHorarioDeFuncionamento = async ({
  segunda,
  terca,
  quarta,
  quinta,
  sexta,
  sabado,
  domingo,
  restauranteId
}) => {
  const novoHorario = await horarios.create({
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado,
    domingo,
    restaurante_id: restauranteId
  });

  return novoHorario;

}

module.exports = {
  criarHorarioDeFuncionamento,
}