import { connect } from "react-redux";
import Container from "./container";


const mapStateToProps = (state, ownProps) => {
    const { user, routing : { location } } = state;
    console.log(user)
    return {
        isLoggedIn: user.isLoggedIn,
        username: user.username,
        pathname: location.pathname
    };
};

export default connect(mapStateToProps)(Container);