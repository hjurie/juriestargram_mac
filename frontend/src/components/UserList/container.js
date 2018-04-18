import React, { Component } from "react";
import PropTypes from 'prop-types';
import UserList from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };

    static propTypes = {
        closeLikes: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        const { userList } = this.props;
        if (userList) {
            this.setState({ loading: false });
        }

        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.userList) {
            this.setState({
                loading: false
            })
        }
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
    */
    handleClickOutside(event) {
        const { closeLikes } = this.props;
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) || event.target.getAttributeNode('data-view')) {
            closeLikes()
        }
    }


    render(){
        return <div ref={this.setWrapperRef}><UserList {...this.state} {...this.props} /></div>
    }
}


export default Container;