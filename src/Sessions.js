import React, { Component } from 'react';
import InputSession from './InputSession.js'
import ListSessions from './ListSessions.js'
import './App.css';

class Sessions extends Component {
  
    render() {
    return (
      <div className="App">
        <InputSession/>
        <ListSessions/>
      </div>
    );
  }
}

export default Sessions;