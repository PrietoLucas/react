import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Login from './pages/login/Login';
import PesquisarMot from './pages/motoristas/pesquisar';
import AlterarMot from './pages/motoristas/alterar';
import IncluirMot from './pages/motoristas/incluir';
import Incluir from './pages/veiculo/incluir';
import Alterar from './pages/veiculo/alterar';
import Pesquisar from './pages/veiculo/pesquisar';

class App extends Component {
  render() {
    return (
      <Router>        
        <div className="container" >
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">HandsomeCar</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Incluir'} className="nav-link">Empresas</Link>
                </li>
                <li className="nav-item">
                  <Link to={'./PesquisarMot'} className="nav-link">Motoristas</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Listar'} className="nav-link">Veículos</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/pesquisarMot' component={PesquisarMot}/>
            <Route path='/pesquisarMot' component={PesquisarMot} />
            <Route path='/atualizarMot/:id' component={AlterarMot} />
            <Route exact path='/incluirMot' component={IncluirMot} />
            <Route exact path='/incluir' component={Incluir} />
            <Route path='/atualizar/:id' component={Alterar} />
            <Route path='/listar' component={Pesquisar} />
          </Switch>
        </div>
        
      </Router>
    );
  }
}

export default App;