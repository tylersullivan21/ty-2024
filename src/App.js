// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from'./pages/Home'
import Projects from './components/Projects';



const App = () => {
  return (
<Router>


      <Routes>
        <Route path="/" element={<HomePage />} />
       
      </Routes>
  
  
    </Router>
  
  
  );
};

export default App;
