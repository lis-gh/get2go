import './App.css';
import React from 'react';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <Home/>

        
        <Footer />
      
   </div>
  );
}

export default App;
