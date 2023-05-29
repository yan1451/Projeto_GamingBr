const { horarios } = require('../models');

const criarHorarioDeFuncionamento = async ({
  segunda,
  terça,
  quarta,
  quinta,
  sexta,
  sábado,
  domingo,
  restauranteId
}) => {
  const novoHorario = await horarios.create({
    segunda,
    terça,
    quarta,
    quinta,
    sexta,
    sábado,
    domingo,
    restaurante_id: restauranteId
  });

  return novoHorario;

}

module.exports = {
  criarHorarioDeFuncionamento,
}