import React, { Component } from "react";
import PropTypes from 'prop-types';
import UserPropfile from "./presenter";

class Container extends Component {

    state = {
        loading: true
    };
    static propTypes = {
        userByTerm: PropTypes.func.isRequired,
        userProfile: PropTypes.shape({
            profile_image: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            bio: PropTypes.string.isRequired,
            website: PropTypes.string.isRequired,
            post_count: PropTypes.number.isRequired,
            followers_count: PropTypes.number.isRequired,
            following_count: PropTypes.number.isRequired,
            images: PropTypes.array
        }).isRequired
    }

    componentDidMount() {
        const { userByTerm } = this.props;
        userByTerm();
    }
    componentDidUpdate(prevProps, prevState) {
        const { userByTerm } = this.props;
        console.log(prevProps)
        if (prevProps.match.params !== this.props.match.params) {
            userByTerm(userByTerm);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userProfile) {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { userProfile } = this.props;
        console.log(this.props)
        console.log("container userProfile")
        return <UserPropfile {...this.state} userProfile = {userProfile} />
    }
}




export default Container;