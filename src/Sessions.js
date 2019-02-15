import React, { Component } from 'react';
import './App.css';

class Sessions extends Component {
  
    postToRest(){
        alert("press");

        fetch('http://localhost:8080/questions', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'yourValue',
    description: 'yourOtherValue',
  })
})
    }
  //button onClick={this.postToRest}>Submit</button>
    render() {
    return (
      <div className="App">
        Hi
      </div>
    );
  }
}

export default Sessions;