import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './styles.css';


export default function Header() {
  const logo = require('../../assets/icon.png')   
  return (
    <>
      <Navbar className="header" expand="lg">
        <Navbar.Brand href="#home" className="font">
          OnTimeBus <img src={logo} alt="logo" className="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="SideMenu">
          <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="mr-auto">
                <Nav.Link href="#home" className="font">Empresas</Nav.Link>
                <Nav.Link href="#about" className="font">Sobre nós</Nav.Link>
                <Nav.Link href="#link" className="font">Entrar</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}