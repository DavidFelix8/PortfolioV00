import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import SideDots from './components/SideDots/Index';
import HomeComponent from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <SideDots />
          <Switch>
            <Route path="/" exact component={HomeComponent} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
