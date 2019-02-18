import React, { Component } from 'react';
import './App.css';

export class SessionTable extends Component {
 
    
    render() {

    let table = <div></div>;

    if(this.props.data.length > 0){
      
      if(this.props.type==="sessionList"){
      //console.log("session list");
      table = <table className='table table-striped' ><tbody>
        <tr><th>Type</th><th>Duration (min) </th><th>Distance (m)</th><th>Date</th><th></th></tr>
        <MapTable data={this.props.data}/>
        </tbody></table>
      } else {
        //console.log("report list");
        table = <table className='table table-striped' ><tbody>
        <tr><th>Type</th><th>Duration (min) </th><th>Distance (m)</th><th></th><th>Sessions</th></tr>
        <MapTable data={this.props.data}/>
        </tbody></table>
      }
    }

      return (
      <div className="App">
        {table}
      </div>
    );
  }
}

function MapTable(props){
 
  return(
    props.data.map((s, index) => 
    <tr key={index +"_" +s.id}>
        <td>{s.type}</td>
        <td>{s.duration}</td>
        <td>{s.distance}</td>
        <td>{s.date}</td>
        <td>{s.numberOfSessions}</td>
    </tr>
    ))
}