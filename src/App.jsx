import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import SideDots from './components/SideDots/Index';
import HomeComponent from './components/Home';
import FooterComponent from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomeComponent} />
          </Switch>
          <SideDots />
          <FooterComponent />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
