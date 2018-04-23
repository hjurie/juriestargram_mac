import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
    state = {
        term: "",
        notification: false
    };
    static propTypes = {
        goToSearch: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired
    };
    render() {
        console.log("nav")
        console.log(this.props)
        console.log("nav")
        return ( 
            <Navigation 
                {...this.state}
                onInputChange={this._onInputChange} 
                onSubmit={this._onSubmit} 
                openNotification={this._openNotification}
                value={this.state.term}
                notification={this.state.notification}
                username={this.props.username}
            />
        )
    }

    _onInputChange = (event) => {
        const { target: { value } } = event;
        this.setState({
            term: value
        });
        console.log(value);
    };

    _onSubmit = event => {
        const { goToSearch } = this.props;
        const { term } = this.state;

        console.log(`Enter: ${term}`)
        event.preventDefault();
        goToSearch(term)
        this.setState({
            term: ""
        })
    }

    _openNotification = () => {
        const { notification } = this.state;
        
        if(notification){
            this.setState({
                notification: false
            });
        }
        else {
            this.setState({
                notification: true
            });
        }
    }
}

export default Container;