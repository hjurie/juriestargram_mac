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
                    {props.notifiList.notification_type === "comment" && (
                        <div>코멘트 자리</div>
                    )}
                    {props.notifiList.notification_type === "follow" && (
                        <div>
                            <strong>{props.user.username}</strong> 
                            {context.t("님이 팔로우하기 시작했습니다.")}
                        </div>
                    )}
                    {props.notifiList.notification_type === "like" && (
                        <div>좋아요 자리</div>
                    )}
                </div>
            ):(
                <div className={styles.user}>
                    <span className={styles.username}>{props.user.username}</span>
                    <span className={styles.name}>{props.user.name}</span>
                </div>
            )}
        </div>
        <span className={styles.column} onClick={props.handleClick}>
                <button className={styles.button}>
                   {props.user.following ? context.t("언팔로우") : context.t("팔로우")}
                </button>
        </span>
    </div>
);


UserDisplay.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_image: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        following: PropTypes.bool.isRequired

    }).isRequired,
    notifiList: PropTypes.shape({
        to: PropTypes.string.isRequired,
        notification_type: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
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


export default UserDisplay;