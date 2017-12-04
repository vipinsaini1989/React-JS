import React, { Component } from 'react';
import MyCookies from './tags/header';
import Timer from './tags/Timer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1 className="App-title">Vipin welcome you in React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyCookies />
        <Timer />
      </div>
    );
  }
}

export default App;
