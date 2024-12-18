import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/about';
import Dashboard from './pages/dashboards/Dashboard';
import Visualization from './pages/visualization/Visualization';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/visualizacao' element={<Visualization/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
