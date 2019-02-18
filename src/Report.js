import React, { Component } from 'react';
import {SessionTable} from './SessionTable.js';
import './App.css';

class Report extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          report: []
        }
      }
      
    componentDidMount(){
        
        fetch('http://localhost:8081/report?startDate=2018-01-01T01:00:00&endDate=2019-02-25T01:00:00')
        .then(response => response.json())
        .then(data => {
          this.setState({report: data});
        })
      }

    render(){
        return(<SessionTable data={this.state.report} />);
  }
}

export default Report;