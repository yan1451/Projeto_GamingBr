import React from "react";
import '../styles/pages/index.css';
import CadastroRestaurante from "../componentes/cadastroRestaurantes";
import CadastroHorarioFuncionamento from "../componentes/cadastroHorarioFuncionamento";
import { useMultiStep } from "../hooks/useMultStep";

const Index = () => {

  const componentes = [<CadastroRestaurante />, <CadastroHorarioFuncionamento />, 0]

  const { currentStep, currentComponente, nextStep} = useMultiStep(componentes);

  console.log(currentStep)

  return (
    <>
    { currentComponente }
    { currentStep !== 0 && <button type="submit" onClick={(e) => nextStep(currentStep - 1)}> voltar  </button>}
    { currentStep === componentes.length - 1 ? <button type="submit" > criar </button> :  <button type="submit" onClick={(e) => nextStep(currentStep + 1)}> proxima </button>}     
    </>  ) 
}

export default Index;