import React, { Component } from "react";
import PropTypes from "prop-types";
import Notification from "./presenter";


class Container extends Component {
    state = {
        loading: true
    }
    static propTypes = {
        getNotification: PropTypes.func.isRequired,
        openNotification: PropTypes.func.isRequired,
        notifiList: PropTypes.array,
        userList: PropTypes.array
    }

    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
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
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.notifiList) {
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
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            try{
                if (event.target.parentNode.nextSibling.getAttributeNode('data-view')) {
                    return;
                }
            }
            catch(err){
            }
            const { openNotification } = this.props;
            openNotification()
        }
    }

    render() {
        const { notifiList } = this.props;

        return (
            <div data-view="true" ref={this.setWrapperRef}>
                <Notification {...this.state} notifiList={notifiList} />
            </div>
        )
    }
}


export default Container;