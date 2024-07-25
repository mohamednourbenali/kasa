import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.scss';
import Header from'./components/Header/Header.js'
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Error from './pages/Error/Error.js';
import Hotel from './pages/Hotel/Hotel.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='nav-bar'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} /> {/* Route pour la page d'accueil */} 
        <Route path='/About' element={<About />} /> {/* Route pour la page À propos */}
        <Route path='/Hotel/:hotelid' element={<Hotel />} /> {/* Route pour les détails d'un hotel spécifique */}
        <Route path='*' element={<Error />} /> {/* Route pour page d'erreur */}
      </Routes>
    </Router>
  </React.StrictMode>
);