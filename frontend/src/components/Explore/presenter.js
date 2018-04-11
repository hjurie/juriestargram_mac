import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserRow from "components/UserRow";


const Explore = props => {
    if (props.loading) {
        return <LoadingExplore loading={props.loading} />
    }
    else if (props.userList) {
        return <RenderExplore {...props} />
    }
}

const LoadingExplore = props =>
    <div className={styles.userList}>
        <Loading loading={props.loading} />
    </div>

const RenderExplore = props => (
    <div className={styles.explore}>
        {props.userList.map(user => <UserRow big={true} user={user} key={user.id} />)}
    </div>
)


Explore.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Explore;