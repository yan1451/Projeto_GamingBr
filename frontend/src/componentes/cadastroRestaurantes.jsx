import React from "react";

const CadastroRestaurante = () => {

  return (
    <section className="cadastro-restaurantes">
      <form>
        <h1>Cadastro de Restaurantes</h1>
        <label htmlFor="name-input">
          <input
            id="name-input"
            type="text"
            placeholder="Nome"
          />
        </label>
        <label htmlFor="documento-input">
          <input
            id="documento-input"
            type="text"
            placeholder="Documento"
          />
        </label>
        <label htmlFor="tipo-input">
          <input
            id="tipo-input"
            type="text"
            placeholder="Tipo"
          />
        </label>
      </form>
    </section>
  );
}

export default CadastroRestaurante;