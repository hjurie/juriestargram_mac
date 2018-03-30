import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";

class Container extends Component {
    state = {
        email: "",
        name: "",
        username: "",
        password: ""
    };

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        createAccount: PropTypes.func.isRequired
    }

    render(){
        const { email, name, username, password } = this.state;
        return <SignupForm 
                    handleInputChange={this._handleInputChange} 
                    handleSubmit={this._handleSubmit} 
                    handleFacebookLogin={this._handleFacebookLogin} 
                    handleCreateAccount={this._handleCreateAccount} 
                    emailValue={email} 
                    nameValue={name} 
                    usernameValue={username} 
                    passwordValue={password}
                />
    };

    _handleInputChange = event => {
        const { target: { value, name } } = event;
        //const name = event.target.value;
        console.log(value, name);
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    _handleSubmit = event => {
        const { createAccount } = this.props;
        const { username, password, email, name } = this.state;
        event.preventDefault();
        createAccount(username, password, email, name);
        console.log(this.state);
        // redux will action
    };

    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }

    _handleCreateAccount = response => {
        const { createAccount } = this.props;
        createAccount(response.token);
    }

}

export default Container;