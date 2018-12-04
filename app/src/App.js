import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to our sample home page.
          </p>
          <div className="inline">
            <a
              className="App-link"
              href="https://github.com/wlyhdg"
              target="_blank"
              rel="noopener noreferrer"
            >
              wlyhdg
            </a>
            &nbsp;|&nbsp;
            <a
              className="App-link"
              href="https://github.com/antofon"
              target="_blank"
              rel="noopener noreferrer"
            >
              antofon
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
