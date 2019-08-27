import React, { Component } from 'react';
import logo from './LOGO_XD.svg';
import './App.css';
import Canvas from './Canvas';
//import { initGame } from './utils/scene';

class App extends Component {
  componentDidMount() {
    // initGame();
  }

  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Привет, Мир!</h1>
        </header>
        <p className="App-intro">
          Меня зовут <code>StrawDragon</code> и я написал этот сайт.
        </p>*/}
        {/* <canvas id="game" width="400" height="400" style={{ border: '1px solid' }} /> */}
        <div id="game" className="canvas-wrapper" >
          <Canvas />
        </div>
      </div>
    );
  }
}

export default App;
