import React, { Component } from 'react';
import Sessions from './Sessions.js';
import Header from './Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Sessions/>
      </div>
    );
  }
}

export default App;
