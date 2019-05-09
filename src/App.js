import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookApi from "./Components/FacebookApi";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facebook Auth Example</h1>
        </div>
        <p className="App-intro">To get started, authenticate with FB.</p>
        <FacebookApi />
      </div>
    );
  }
}

export default App;
