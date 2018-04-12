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
    <div className={styles.notification}>
        {props.notifiList.map(notifiList => <UserDisplay big={false} horizontal={true} user={notifiList.creator} notifiList={notifiList} key={notifiList.id} />)}
    </div>
)

const RenderLoading = (props) => (
    <div className={styles.loading}>
        <Loading loading={props.loading} />
    </div>
)


Notification.propTypes = {
    loading: PropTypes.bool.isRequired
}



export default Notification;