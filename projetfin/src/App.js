// import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Composants/home';
import Consoles from './Composants/consoles';
import ListeJeux from './Composants/listejeux';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/liste_consoles" element={<Consoles />} />
          <Route path="/liste_jeux" element={<ListeJeux />} /> 
      </Routes> 
    </>
  );
}

export default App;
