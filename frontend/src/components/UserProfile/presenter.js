import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";


const UserProfile = (props, context) => (
    <div className={styles.wrap}>
        <div className={styles.header}>
            <div className={styles.photo}>
                <img src={require("images/noProfile.jpg")} alt="" />
            </div>
            <div className={styles.userWrap}>
                <div className={styles.setup}>
                    <h1>이름</h1>
                    <a>{context.t("프로필 편집")}</a>
                    <span>
                        <Ionicon icon="ios-settings" fontSize="28px" color="black" />
                    </span>
                </div>
                <div className={styles.info}>
                    <span>{context.t("게시물")} <b>1</b></span>
                    <span>{context.t("팔로워")} <b>19</b></span>
                    <span>{context.t("팔로우")} <b>35</b></span>
                </div>
                <div className={styles.addInfo}>
                    <h1>풀네임</h1>
                    <span>간단한 자기소개</span>
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
);


UserProfile.contextTypes = {
    t: PropTypes.func.isRequired
}




export default UserProfile;