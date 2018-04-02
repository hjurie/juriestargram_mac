import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos" 


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFeed: () => {
            dispatch(photoActions.getFeed());
        }
    }
}



export default connect(null, mapDispatchToProps)(Container);