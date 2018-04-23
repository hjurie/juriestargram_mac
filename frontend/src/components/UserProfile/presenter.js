import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";
import Loading from "components/Loading";


const UserProfile = (props, context) => {
    return(
    <div className={styles.wrap}>
        {props.loading && <Loading />}
        {!props.loading &&
            !props.userProfile && (
                <NotFound text={context.t("Nothing found :(")} />
            )}
        {!props.loading &&
            props.userProfile && (
                <RenderUser userProfile={props.userProfile} />
            )}
    </div>)
}


const RenderUser = (props, context) => {
    return (
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.photo}>
                    <img
                        src={props.userProfile.profile_image || require("images/noProfile.jpg")}
                        alt={props.userProfile.username}
                    />
                </div>
                <div className={styles.userWrap}>
                    <div className={styles.setup}>
                        <h1>{props.userProfile.username}</h1>
                        <a>{context.t("프로필 편집")}</a>
                        <span>
                            <Ionicon icon="ios-settings" fontSize="28px" color="black" />
                        </span>
                    </div>
                    <div className={styles.info}>
                        <span>{context.t("게시물")} <b>{props.userProfile.post_count}</b></span>
                        <span>{context.t("팔로워")} <b>{props.userProfile.followers_count}</b></span>
                        <span>{context.t("팔로윙")} <b>{props.userProfile.following_count}</b></span>
                    </div>
                    <div className={styles.addInfo}>
                        <h1>{props.userProfile.name}</h1>
                        <span>{props.userProfile.bio}</span>
                        <p><b>elegance_kwon</b>님이 팔로우합니다</p>
                    </div>
                </div>
            </div>
            <div className={styles.contents}>
                <div className={styles.tab}>
                    <button type="button" className={styles.active}>{context.t("게시물")}</button>
                    <button type="button">{context.t("저장됨")}</button>
                </div>
                <div className={styles.contentsArea}>
                </div>
            </div>
        </div>
    )
}

const NotFound = props => <span className={styles.notFound}>{props.text}</span>;

UserProfile.contextTypes = {
    t: PropTypes.func.isRequired
}

RenderUser.contextTypes = {
    t: PropTypes.func.isRequired
}



export default UserProfile;