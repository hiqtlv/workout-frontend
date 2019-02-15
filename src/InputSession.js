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

    postToRest(){
        alert("post to be implemented...");

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
        console.log(this.state);
    }

    render() {
        const types = ['Running', 'Biking', 'Swiming'];
        return (
            <div>
                <form>
                <label>Activity type </label><Dropdown options={types} value={this.state.type} onChange={this.handleTypeChange} name="type"/>
                <label>Distance </label><input type="number" name="distance" value={this.state.distance} className="form-control" onChange={this.handleChange}></input><br/>
                <label>Duration </label><input type="number" name="duration" value={this.state.duration} className="form-control"onChange={this.handleChange}></input><br/>
                <label>Date </label><br/><DatePicker name="date" selected={this.state.selectedDate} onChange={this.handleDatePicker}/><br/><br/>
                <button onClick={this.postToRest} className="btn btn-primary">Submit</button><br/><br/>
                </form>
            </div>
        );
    }
}

export default InputSession;