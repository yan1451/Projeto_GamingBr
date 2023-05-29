import { Routes, Route } from 'react-router-dom';
import Index from './paginas';
import VerficiarFuncionamento from './componentes/VerificarFuncionamento';


function App() {
  return (
    <Routes> 
      <Route path='/' element={ <Index /> }/>
      <Route path='/verificar' element={ <VerficiarFuncionamento /> }/>
    </Routes>
  );
}

export default App;
