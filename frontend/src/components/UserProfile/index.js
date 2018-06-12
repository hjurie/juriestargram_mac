import { connect } from "react-redux";
import { actionCreators as userActions } from "redux/modules/user.js";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
    const { user: { userProfile, username } } = state;
    return {
        username,
        userProfile
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    console.log(ownProps)
    const { match: { params: { username } } } = ownProps;
    return {
        userByTerm: () => {
            dispatch(userActions.userByTerm(username))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Container);