import React, { Component } from 'react';
import {SessionTable} from './SessionTable.js';
import './App.css';

class ListSessions extends Component {
 
  constructor(props){
    super(props);

    this.state = {
      sessions: []
    }
  }
  
  componentDidMount(){
    
    fetch('http://localhost:8081/session')
    .then(response => response.json())
    .then(data => {
      this.setState({sessions: data});
    })
  }

  render(){
    return(<SessionTable type="sessionList" data={this.state.sessions}/>)
  }
}

export default ListSessions;