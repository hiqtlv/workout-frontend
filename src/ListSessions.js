import React, { Component } from 'react';
import './App.css';

class ListSessions extends Component {
 
  constructor(props){
    super(props);

    this.state = {
      sessions: []
    }
  }
  
  componentDidMount(){
    let data = fetch('http://localhost:8081/session')
    .then(response => response.json())
    .then(data => {
      this.setState({sessions: data});
      //console.log("jonas data:" ,...data);
    })
  }


    render() {

    const sessionList = this.state.sessions.map(s => <ListSession session={s}/>);
    let table = <div></div>;

    if(this.state.sessions.length > 0){
      table = <table className='table table-striped' ><tbody>
        <tr><th>Type</th><th>Duration</th><th>Distance</th><th>Date</th></tr>
      {sessionList}
      </tbody></table>
    }

      return (
      <div className="App">
        {table}
      </div>
    );
  }
}

function ListSession(props){
  return (
<tr key={"table_" +props.session.id}>
  <td>{props.session.type}</td>
  <td>{props.session.duration}</td>
  <td>{props.session.distance}</td>
  <td>{props.session.date}</td>
</tr>
  )
}

export default ListSessions;