import './App.css';
import React from 'react';
import Footer from './Footer';
import Searchproduct from './Searchproduct';
import Productdetail from './Productdetail';
import Home from './Home';
import { BrowserRouter, NavLink, Routes, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/searchproduct" element={<Searchproduct />}></Route>
          <Route path="/productdetail" element={<Productdetail />}></Route>

        </Routes>
      </BrowserRouter>

        
        <Footer />
      
   </div>
  );
}

export default App;
