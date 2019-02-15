import React, { Component } from 'react';

class InputSession extends Component {

    constructor() {
        super();

        this.state = {
            title: "question from react",
            description: "question text"
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

    render() {
        return (
            <div>
                <p>Inputform place holder</p>
                <button onClick={this.postToRest}>Submit</button>
            </div>
        );
    }
}

export default InputSession;