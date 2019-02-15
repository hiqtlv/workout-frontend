import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Dropdown from 'react-dropdown';
import 'react-datepicker/dist/react-datepicker.css'
import 'react-dropdown/style.css'

class InputSession extends Component {

    constructor() {
        super();

        this.state = {
            selectedDate: new Date(),
            duration: "",
            distance: "",
            type: ""
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

    handleDatePicker(e){

    }

    handleTypeChange(e){
        this.setState
    }

    render() {
        const types = ['Running', 'Biking', 'Swiming'];
        return (
            <div>
                <form>
                <label>Activity type </label><Dropdown options={types} value={"Running"} onChange={this.handleTypeChange}/>
                <label>Distance </label><input type="text" className="form-control"></input><br/>
                <label>Duration </label><input type="text" className="form-control"></input><br/>
                <label>Date </label><br/><DatePicker selected={this.state.selectedDate} onChange={this.handleDatePicker}/><br/><br/>
                <button onClick={this.postToRest}>Submit</button><br/><br/>
                </form>
            </div>
        );
    }
}

export default InputSession;