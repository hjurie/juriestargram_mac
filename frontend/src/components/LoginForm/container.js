import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "./presenter";

class Container extends Component {
    state = {
        username: "",
        password: ""
    };

    static propTypes = {
        usernameLogin: PropTypes.func.isRequired
    }

    render() {
        const { username, password } = this.state;
        return <LoginForm 
                    handleInputChange={this._handleInputChange} 
                    handleSubmit={this._handleSubmit} 
                    handleUsernameLogin={this._handleUsernameLogin} 
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
        const { usernameLogin } = this.props;
        const { username, password } = this.state;
        event.preventDefault();
        usernameLogin(username, password);
        console.log(this.state);
        // redux will action
    }

    _handleUsernameLogin = response => {
        const { usernameLogin } = this.props;
        usernameLogin(response.token)
    }
}

export default Container;