import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const FeedPhoto = (props, context) => {
    console.log(props.id);
    console.log(props);
    return <div className={styles.feedPhoto}>hello!</div>;
}

FeedPhoto.propTypes = {
    creator: PropTypes.shape({
        profile_image: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            creator: PropTypes.shape({
                profile_image: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired
            }),
            message: PropTypes.string.isRequired
        })
    ),
    created_at: PropTypes.string.isRequired
}


export default FeedPhoto;