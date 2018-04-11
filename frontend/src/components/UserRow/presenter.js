import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";


const UserRow = (props, context) => (
    <div className={styles.container}>
        <div className={styles.column}>
            <img
                src={props.user.profile_image || require("images/noPhoto.jpg")}
                alt={props.user.username}
                className={props.big ? styles.bigAvatar : styles.avatar}
            />
            <div className={styles.user}>
                <span className={styles.username}>{props.user.username}</span>
                <span className={styles.name}>{props.user.name}</span>
            </div>
        </div>
        <span className={styles.column} onClick={props.handleClick}>
                <button className={styles.button}>
                   {props.user.following ? context.t("Unfollow") : context.t("Follow")}
                </button>
        </span>
    </div>
);


UserRow.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_image: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        following: PropTypes.bool.isRequired

    }).isRequired,
    big: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired

}

UserRow.contextTypes = {
    t: PropTypes.func.isRequired
}

UserRow.defaultProps = {
    big: false
}


export default UserRow;