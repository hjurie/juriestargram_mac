import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";


const Feed = props => {
    if(props.loading){
        return <LoadingFeed loading={props.loading} />
    }
}

const LoadingFeed = props => 
    <div className={styles.feed}>
        <Loading loading={props.loading} />
    </div>


Feed.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Feed;