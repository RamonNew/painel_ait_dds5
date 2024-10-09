import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Home from './components/views/Home';
import Login from './components/views/Login';
import GestaoUsuario from './components/views/GestaoUsuario';
import ImportCSV from './components/views/ImportCSV';
import CadastroAula from './components/views/CadastroAula';
import GestaoAulas from './components/views/GestaoAulas';
import EditAula from './components/views/EditAula';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/gestao_usuario' element={<GestaoUsuario/>} />
        <Route path='/import_csv' element={<ImportCSV/>} />
        <Route path='/cadastro_aula' element={<CadastroAula/>} />
        <Route path='/gestao_aulas' element={<GestaoAulas/>} />
        <Route path='/gestao_aulas/:tipo' element={<GestaoAulas/>} />
        <Route path='/edit_aula/:id' element={<EditAula/>} />
      </Routes>
    </Router>
  );
}

export default App;
