import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Routes from '../routes';

export default function Main() {
    return (
        <Routes>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'} className="navbar-brand">HandsomeCar - Controle de Frotas</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Incluir'} className="nav-link">Incluir Veículos</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Listar'} className="nav-link">Listar Veículos</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
        </div>
      </Routes>
    );
}