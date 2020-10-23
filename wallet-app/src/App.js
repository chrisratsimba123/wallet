import React, { Component } from 'react'
import logo from './Assets/ironfish-asset.png';
import './App.css';
import Home from './Home'

function App() {
  return (
    <div id="content">
      <div id="nav">
        <div id="logo"><img src={logo} alt="Iron Fish Logo" /></div>
        <div id="title">Iron Fish Wallet</div>
      </div>
      <Home />
      <Home />
      <div className="clear"></div>
    </div>
  );
}

export default App;
