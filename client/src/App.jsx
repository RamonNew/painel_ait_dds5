import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Home from './components/views/Home';
import Login from './components/views/Login';
import GestaoUsuario from './components/views/GestaoUsuario';
import ImportCSV from './components/views/ImportCSV';
import CadastroAula from './components/views/CadastroAula';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/gestao_usuario' element={<GestaoUsuario/>} />
        <Route path='/import_csv' element={<ImportCSV/>} />
        <Route path='/cadastro_aula' element={<CadastroAula/>} />
      </Routes>
    </Router>
  );
}

export default App;
