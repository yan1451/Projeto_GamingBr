import React from "react";

const CadastroFuncionamento = () => {
    return(
        <section className="cadastro-restaurantes">
        <form>
          <h1>Definir horario de Funcionamento</h1>
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

export default CadastroFuncionamento;