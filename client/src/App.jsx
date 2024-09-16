import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Home from './components/views/Home';
import Login from './components/views/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
