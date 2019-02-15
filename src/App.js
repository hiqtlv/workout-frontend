import React, { Component } from 'react';
import Sessions from './Sessions.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          My Workouts
        </header>
        <Sessions/>
      </div>
    );
  }
}

export default App;
