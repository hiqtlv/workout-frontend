import React, { Component } from 'react';
import Sessions from './Sessions.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <p>My Workouts</p>
          <Sessions/>
        </header>
      </div>
    );
  }
}

export default App;
