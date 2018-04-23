import { connect } from "react-redux";
import Container from "./container";
import { push } from "react-router-redux";

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    console.log("nav-container")
    return {
        goToSearch: (searchTerm) => {
            dispatch(push(`/search/${searchTerm}`));
        }
    }
}



export default connect(null, mapDispatchToProps)(Container);
