import React from "react";
import '../styles/componentes/cadastroHorarioFuncionamento.css'

const CadastroFuncionamento = ({ data, handleChange }) => {
  return (
    <section className="cadastro-horariosFuncionamento">
      <form>
        <h1>Definir horario de Funcionamento</h1>
        <div>
          <label htmlFor="input-segundaFeira">
            <input
              id="input-segundaFeira"
              type="text"
              value={data.segunda}
              placeholder="Segunda-feira"
              onChange={(e) => handleChange("segunda", e.target.value)}
            />
          </label>
          <label htmlFor="input-tercaFeira">
            <input
              id="input-tercaFeira"
              type="text"
              value={data.terça}
              placeholder="Terça-feira"
              onChange={(e) => handleChange("terça", e.target.value)}
            />
          </label>
          <label htmlFor="input-quartaFeira">
            <input
              id="input-quartaFeira"
              type="text"
              value={data.quarta}
              placeholder="Quarta-feira"
              onChange={(e) => handleChange("quarta", e.target.value)}
            />
          </label>
          <label htmlFor="input-quintaFeira">
            <input
              id="input-quintaFeira"
              type="text"
              value={data.quinta}
              placeholder="Quinta-feira"
              onChange={(e) => handleChange("quinta", e.target.value)}
            />
          </label>
          <label htmlFor="input-sextaFeira">
            <input
              id="input-sextaFeira"
              type="text"
              value={data.sexta}
              placeholder="Sexta-feira"
              onChange={(e) => handleChange("sexta", e.target.value)}
            />
          </label>
          <label htmlFor="input-sabado">
            <input
              id="input-sabado"
              type="text"
              value={data.sábado}
              placeholder="Sabado"
              onChange={(e) => handleChange("sábado", e.target.value)}
            />
          </label>
          <label htmlFor="input-domingo">
            <input
              id="input-domingo"
              type="text"
              value={data.domingo}
              placeholder="Domingo"
              onChange={(e) => handleChange("domingo", e.target.value)}
            />
          </label>
        </div>
      </form>
    </section>
  );
}

export default CadastroFuncionamento;