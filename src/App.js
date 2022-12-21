import React from "react";
import Home from "./Components/home/Home";
import './App.css';
import Login from "./Form/Login";
import Order from "./Components/orders/order";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
