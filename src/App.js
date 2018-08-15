import React, { Component } from 'react';
import logo from './LOGO_XD.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Привет, Мир!</h1>
        </header>
        <p className="App-intro">
          Меня зовут <code>StrawDragon</code> и я написал этот сайт.
        </p>
      </div>
    );
  }
}

export default App;
