import React from 'react';

import './App.css';

import logo from './assets/logo.svg';

import Footer from './components/Footer/index';
import Header from './components/Header/index';

import Routes from './routes';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <img src={logo} alt="AirCnC" />
        <div className="content">
          <Routes />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
