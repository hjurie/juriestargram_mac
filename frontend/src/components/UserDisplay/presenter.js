import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";


const UserDisplay = (props, context) => (
    <div className={props.horizontal ? styles.horizontal : styles.vertical}>
        <div className={styles.column}>
            <img
                src={props.user.profile_image || require("images/noPhoto.jpg")}
                alt={props.user.username}
                className={props.big ? styles.bigAvatar : styles.avatar}
            />
            {props.notifiList ? (
                <div className={styles.notification}>
                    <span className={styles.notiText}>
                        {props.notifiList.notification_type === "like" && (
                            <RenderLike 
                                username={props.user.username} 
                            />
                        )}
                        {props.notifiList.notification_type === "comment" && (
                            <RenderComment 
                                username={props.user.username} 
                                comment={props.notifiList.comment} 
                            />
                        )}
                        {props.notifiList.notification_type === "follow" && (
                            <RenderFollow 
                                username={props.user.username} 
                            />
                        )}
                    </span>
                    <span className={styles.timeStamp}>
                        {props.notifiList.natural_time}
                    </span>
                </div>
            ):(
                <div className={styles.user}>
                    <span className={styles.username}>{props.user.username}</span>
                    <span className={styles.name}>{props.user.name}</span>
                </div>
            )}
        </div>
        <div className={styles.column}>
            {props.notifiList && (props.notifiList.notification_type !== "follow") ? (
                <span className={styles.column}>
                    <img src={props.notifiList.image.file} alt="" className={styles.thumnail} />
                </span>
            ) : (
                <span className={styles.column} onClick={props.handleClick}>
                    <button className={styles.button}>
                        {props.user.following ? context.t("언팔로우") : context.t("팔로우")}
                    </button>
                </span>
            )}
        </div>
    </div>
);



const RenderLike = (props, context) => (
    <span>
        <strong>{props.username}</strong>
        <span>{context.t("님이 회원님의 사진을 좋아합니다.")}</span>
    </span>
)

const RenderComment = (props, context) => (
    <span>
        <strong>{props.username}</strong>
        <span>{context.t("님이 댓글을 남겼습니다")}: {props.comment}</span>
    </span>
)

const RenderFollow = (props, context) => (
    <span>
        <strong>{props.username}</strong>
        <span>{context.t("님이 팔로우하기 시작했습니다.")}</span>
    </span>
)


UserDisplay.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        following: PropTypes.bool.isRequired

    }).isRequired,
    big: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
}

UserDisplay.contextTypes = {
    t: PropTypes.func.isRequired
}

UserDisplay.defaultProps = {
    big: false
}


RenderLike.propTypes = {
    username: PropTypes.string.isRequired
}

RenderComment.propTypes = {
    username: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
}

RenderFollow.propTypes = {
    username: PropTypes.string.isRequired
}



RenderLike.contextTypes = {
    t: PropTypes.func.isRequired
}

RenderComment.contextTypes = {
    t: PropTypes.func.isRequired
}

RenderFollow.contextTypes = {
    t: PropTypes.func.isRequired
}






export default UserDisplay;