import { connect } from "react-redux";
import { actionCreators as userActions } from "redux/modules/user.js";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
    const { user: { userList, imageList } } = state;
    return {
        imageList,
        userList
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    const { match : { params : { searchTerm } } } = ownProps;
    return {
        searchByTerm: () => {
            dispatch(userActions.searchByTerm(searchTerm))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Container);