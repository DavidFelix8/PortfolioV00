import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import AboutMe from './Views/AboutMe';
import SideDots from './components/SideDots/Index';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <SideDots />
          <Switch>
            <AboutMe />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
