import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';

import { VillageStateProvider } from "./util/villageContext";
import { Game } from './pages/game';
import { Login } from './pages/login/login';


function App() {
  return (
    <div className="App">
      <Router>
        <VillageStateProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/game' element={<Game />} />
          </Routes>
        </VillageStateProvider>
      </Router>
    </div>
  );
}

export default App;
