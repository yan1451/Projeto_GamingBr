import React, { useState } from "react";

const CadastroRestaurante = () => {

  const [name, setName] = useState("");
  const [documento, setDocumento] = useState("");
  const [tipo, setTipo] = useState("");

  return (
    <section className="cadastro-restaurantes">
      <form>
        <h1>Cadastro de Restaurantes</h1>
        <label htmlFor="name-input">
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
        </label>
        <label htmlFor="documento-input">
          <input
            id="documento-input"
            type="text"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            placeholder="Documento"
          />
        </label>
        <label htmlFor="tipo-input">
          <input
            id="tipo-input"
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            placeholder="Tipo"
          />
        </label>
      </form>
    </section>
  );
}

export default CadastroRestaurante;