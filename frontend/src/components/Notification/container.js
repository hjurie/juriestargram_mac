import React, { Component } from "react";
import PropTypes from "prop-types";
import Notification from "./presenter";


class Container extends Component {
    state = {
        loading: true
    }
    static propTypes = {
        getNotification: PropTypes.func.isRequired,
        notifiList: PropTypes.array
    }
    componentDidMount() {
        const { getNotification } = this.props;
        if (!this.props.notifiList) {
            getNotification();
        }
        else {
            this.setState({
                loading: false
            })
        }
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.notifiList) {
            this.setState({
                loading: false
            })
        }
    }
    render() {
        const { notifiList } = this.props;
        console.log(notifiList);
        return <Notification {...this.state} notifiList={notifiList} />
    }
}


export default Container;