import React, { Component } from "react";
import LoginForm from "./presenter";

class Container extends Component {
    state = {
        username: "",
        password: ""
    };

    render() {
        const { username, password } = this.state;
        return <LoginForm 
                    handleInputChange={this._handleInputChange} 
                    handleSubmit={this._handleSubmit}
                    usernameValue={username} 
                    passwordValue={password}/>;
    };

    _handleInputChange = event => {
        const { target : { value, name } } = event;
        //const name = event.target.value;
        console.log(value, name);
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };
    
    _handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        // redux will action
    }
}

export default Container;