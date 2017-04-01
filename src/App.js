import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />

      </div>
    );
  }
}

export default App;
