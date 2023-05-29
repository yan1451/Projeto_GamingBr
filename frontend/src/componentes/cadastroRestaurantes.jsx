import React from "react";
import '../styles/componentes/cadastroRestaurantes.css'

const CadastroRestaurante = ({ data, handleChange }) => {
  return (
    <section className="cadastro-restaurantes">
      <form>
        <h1>Cadastro de Restaurantes</h1>
        <label htmlFor="name-input">
          <input
            id="name-input"
            type="text"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Nome"
          />
        </label>
        <label htmlFor="documento-input">
          <input
            id="documento-input"
            type="text"
            value={data.documento}
            onChange={(e) => handleChange("documento", e.target.value)}
            placeholder="Documento"
          />
        </label>
        <label htmlFor="tipo-input">
          <input
            id="tipo-input"
            type="text"
            value={data.tipo}
            onChange={(e) => handleChange("tipo", e.target.value)}
            placeholder="Tipo"
          />
        </label>
      </form>
    </section>
  );
}

export default CadastroRestaurante;