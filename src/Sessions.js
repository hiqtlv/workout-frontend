import React, { Component } from 'react';
import InputSession from './InputSession.js'
import ListSessions from './ListSessions.js'
import Report from './Report.js'
import './App.css';
import { Switch, Route } from 'react-router-dom'

/*
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
*/

// The Main component renders one of the three provided
// Routes (provided that one matches)
const Sessions = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ListSessions}/>
      <Route path='/inputSession' component={InputSession}/>
      <Route path='/report' component={Report}/>
    </Switch>
  </main>
)

export default Sessions