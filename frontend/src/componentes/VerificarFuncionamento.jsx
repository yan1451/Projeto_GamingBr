import React, { useState } from 'react';
import VisualizarRestaurantes from "./BtnVisualizar";
import Header from "./header";
import * as moment from 'moment'; import 'moment/locale/pt-br';
import Cadastrar from "./BtnCadastro";
import { requestData } from "../services/request";

const VerficiarFuncionamento = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState([]); 
  const [restaurante, setRestaurante] = useState('');

  const diaSemana = moment(data).format('LLLL').split(",")[0];
  const horas = moment(data).format('LT');

  const formatDiaSemana = diaSemana.split('-')[0];

  const statusMessagem = (restaurante) => {


    if (error) {

      const newArray = error.some((e) => e === true)

    if (newArray) {

          return <h1>Restaurante está aberto</h1>

        } else if (horas < restaurante[0]) {

          return <h1> Restaurante abre as {restaurante[0]} </h1>

        } else if (restaurante[(restaurante.length / 2) - 1] <= horas && horas <= restaurante[restaurante.length / 2]) {

          return <h1> restaurante abre as  {restaurante[parseInt(((restaurante.length - 1) / 2 + 1))]}</h1>

        } else {
          return <h1> restaurante estava aberto as {restaurante[restaurante.length - 1]} </h1>
        }
      }
    }
    

const isOpen = async (e) => {

  e.preventDefault();

  try {
    const endpoint = "restaurantes/verificar";

    const rest = await requestData(endpoint, {
      name, data
    });
    let h;
    let g;
    rest.map((y) => Object.keys(y.horarios).forEach((z, index) => z === formatDiaSemana ? h = index : null));
    rest.forEach((j) => Object.values(j.horarios).filter((p, index) => index === h ? p : null).filter((k) => g = k));
    const m = g.split(" ")
    const t = m.map((i) => i.includes(':') === true ? i.replace(/:[^:]+$/g, '') : i.replace(/[^0-9]/g, '')).filter((r) => r !== "");
    const p = t.map((q) => q.includes(':') ? moment(`2023-07-03 ${q}:00:00`).format('LT') : moment(`2023-07-03 ${q}:00:00`).format('LT'));
    let x = [];

    setRestaurante(p);

    for (let i = 0; i <= p.length - 1; i += 1) {
      if (p[i] <= horas & p[i + 1] >= horas) {
        x.push(true);
        i += 1;
      } else {
        x.push(false);
        i += 1;
      }
      setError(x);
    }

  } catch (error) {

    console.log(error);
  }
}

return (
  <>
    <Header
      Page="verificar"
      PrimeiroLinkNavegacao={Cadastrar}
      SegundoLinkNavegacao={VisualizarRestaurantes}
    />
    <section className="cadastro-restaurantes">
      <form>
        <h1>Verificar Horário de Funcionamento</h1>
        <label htmlFor="name-input">
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
        </label>
        <label htmlFor="date-input">
          <input
            id="date-input"
            type="datetime-local"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Data e Hora"
          />
        </label>
        <button type='submit' onClick={(e) => isOpen(e)}> Validar </button>
        {restaurante.length !== 0 && statusMessagem(restaurante)}
      </form>
    </section>
  </>
)
};

export default VerficiarFuncionamento;
