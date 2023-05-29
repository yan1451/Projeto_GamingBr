import React, { useState } from "react";
import '../styles/pages/index.css';
import CadastroRestaurante from "../componentes/cadastroRestaurantes";
import CadastroHorarioFuncionamento from "../componentes/cadastroHorarioFuncionamento";
import Header from "../componentes/header";
import { useMultiStep } from "../hooks/useMultStep";
import Cadastrar from "../componentes/BtnCadastro";
import VisualizarRestaurantes from "../componentes/BtnVisualizar";
import { createData } from "../services/request";


const Index = () => {

  const restaurante = {
    name: "",
    documento: "",
    tipo: "",
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "",
    domingo: "",
  }

  const cadastro = async (e) => {
    e.preventDefault();

    try {
      const endpoint = "restaurantes";

      await createData(endpoint, {
        data
      });
      window.location.reload();
    } catch (error) {
      alert('Preencha Todos os Campos');
    }
  }

  const handleChange = (key, value) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value
      }
    });
  }
  const [data, setData] = useState(restaurante);

  const componentes = [
    <CadastroRestaurante data={data} handleChange={handleChange} />,
    <CadastroHorarioFuncionamento data={data} handleChange={handleChange} />]

  const { currentStep, currentComponente, nextStep } = useMultiStep(componentes);
  return (
    <>
    <Header
    Page="index"
    PrimeiroLinkNavegacao={ Cadastrar }
    SegundoLinkNavegacao={VisualizarRestaurantes}
    />
    <div className="main">
      {currentComponente}
      <div className="btns">
        {currentStep !== 0 && <button type="submit" className="btn-voltar" onClick={() => nextStep(currentStep - 1)}> Voltar  </button>}
        {
          currentStep === componentes.length - 1 ? <button type="submit" onClick={(e) => cadastro(e)} className="btn-criar"> Cadastrar </button>
            :
            <button type="submit" className="btn-proxima" onClick={() => nextStep(currentStep + 1)}> Proxima </button>}
      </div>
    </div>
    </>)
}

export default Index;