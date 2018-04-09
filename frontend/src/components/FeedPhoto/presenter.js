import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";
import UserList from "components/UserList";


const FeedPhoto = (props, context) => {
    console.log(props)
    return (
        <div className={styles.feedPhoto}>
            <header className={styles.header}>
                <img 
                    src={props.creator.profile_image || require("images/noPhoto.jpg")} 
                    alt={props.creator.username} 
                    className={styles.image}
                />
                <div className={styles.headerColumn}>
                    <span className={styles.creator}>{props.creator.username}</span>
                    <span className={styles.location}>{props.location}</span>
                </div>
            </header>
            <img src={props.file} alt={props.caption} />
            <div className={styles.meta}>
                <PhotoActions 
                    number={props.like_count} 
                    isLiked={props.is_liked} 
                    photoId={props.id} 
                    openLikes={props.openLikes}
                />
                <PhotoComments 
                    caption={props.caption} 
                    creator={props.creator.username} 
                    comments={props.comments} 
                />
                <TimeStamp time={props.natural_time} />
                <CommentBox photoId={props.id} /> 
            </div>
            {props.seeingLikes && (
                <UserList title={context.t("좋아요")} closeLikes={props.closeLikes} />
            )}
        </div>
    )
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
    created_at: PropTypes.string.isRequired,
    natural_time: PropTypes.string.isRequired,
    is_liked: PropTypes.bool.isRequired,
    openLikes: PropTypes.func.isRequired,
    closeLikes: PropTypes.func.isRequired,
    seeingLikes: PropTypes.bool.isRequired
};
FeedPhoto.contextTypes = {
    t: PropTypes.func.isRequired
};



export default FeedPhoto;