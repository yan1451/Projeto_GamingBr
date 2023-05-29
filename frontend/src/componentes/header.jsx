import React from 'react';
import '../styles/componentes/header.css';

const Header = ({Page, PrimeiroLinkNavegacao, SegundoLinkNavegacao}) => {

  return (
    <header className="common-header">
      <div className="buttons-content">
        {
        (Page === "index") ?       
        <SegundoLinkNavegacao /> :
        <PrimeiroLinkNavegacao /> 
        }
      </div>
    </header>
  );
};

export default Header;
