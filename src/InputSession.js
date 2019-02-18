import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Dropdown from 'react-dropdown';
import 'react-datepicker/dist/react-datepicker.css'
import 'react-dropdown/style.css'

class InputSession extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDate: new Date(),
            duration: "",
            distance: "",
            type: "Running"
        };
    }

    postToRest = (e) => {
        e.preventDefault();
        fetch('http://localhost:8081/session', {
        crossDomain:true,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            duration: this.state.duration,
            distance: this.state.distance,
            date: this.state.selectedDate,
            type: this.state.type}),
        });

        this.setState({
            distance: "",
            duration: ""
        });
    }

    handleDatePicker = (e) => {
        this.setState( {selectedDate : e});
    }

    handleTypeChange = (e) => {
        this.setState( { type : e.value});
    }
    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value});
    }

    render() {
        const types = ['Running', 'Biking', 'Swiming'];
        return (
            <div>
                <form onSubmit={this.postToRest}>
                <label>Activity type </label><Dropdown options={types} value={this.state.type} onChange={this.handleTypeChange} name="type"/>
                <label>Distance (m) </label><input type="number" name="distance" value={this.state.distance} className="form-control" onChange={this.handleChange} required></input><br/>
                <label>Duration (min) </label><input type="number" name="duration" value={this.state.duration} className="form-control"onChange={this.handleChange} required></input><br/>
                <label>Date </label><br/><DatePicker name="date" selected={this.state.selectedDate} onChange={this.handleDatePicker}/><br/><br/>
                <button className="btn btn-primary">Submit</button><br/><br/>
                </form>
            </div>
        );
    }
}

export default InputSession;