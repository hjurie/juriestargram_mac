import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";
import Notification from "components/Notification";

const Navigation = (props, context) => (
    <div className={styles.navigation}>
        <div className={styles.inner}>
            <div className={styles.column}>
                <Link to="/">
                    <img 
                        src={require("images/logo.png")}
                        className={styles.logo}
                        alt={context.t("로고")}
                    />
                </Link>
            </div>
            <div className={styles.column}>
                <form onSubmit={props.onSubmit}>
                    <input 
                        type="text" 
                        placeholder={context.t("검색")}
                        className={styles.searchInput} 
                        onChange={props.onInputChange}
                        value={props.value}
                    />
                </form>
            </div>
            <div className={styles.column}>
                <div className={styles.navIcon}>
                    <Link to="/explore">
                        <Ionicon icon="ios-compass-outline" fontSize="28px" color="black" />
                    </Link>
                </div>
                <div className={styles.navIcon}>
                    <span onClick={props.openNotification}>
                        <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
                    </span>
                    {props.notification ? (<Notification />): null}
                </div>
                <div className={styles.navIcon}>
                    <Link to="/profile">
                        <Ionicon icon="ios-person-outline" fontSize="32px" color="black" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

Navigation.contextTypes = {
    t: PropTypes.func.isRequired
};

Navigation.propTypes = {
    value: PropTypes.string.isRequired,
    notification: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    openNotification: PropTypes.func.isRequired
}


export default Navigation;