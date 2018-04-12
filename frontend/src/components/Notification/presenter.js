import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";


const Notification = (props, context) => {
    console.log("props")
    console.log(props)
    return (
        <div className={styles.contentsWrap}>
            <div className={styles.popWrap}>
                {props.loading ? 
                    (<RenderLoading loading={props.loading} />) : 
                    (<RenderNotification {...props} />)}
            </div>
        </div>
    )
}



const RenderNotification = props => (
    <div>
        {props.notifiList.map(user => <UserDisplay big={true} horizontal={true} user={user.creator} key={user.creator.id} />)}
    </div>
)

const RenderLoading = (props) => <Loading loading={props.loading} />


Notification.propTypes = {
    loading: PropTypes.bool.isRequired
}



export default Notification;