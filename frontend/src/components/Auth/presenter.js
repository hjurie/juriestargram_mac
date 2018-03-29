import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const Auth = (props, context) => (
    <main className={styles.auth}>
        <div className={styles.column}>
            <img src={require("images/phone.png")} alt="Checkout our app. Is cool" />
        </div>
        <div className={styles.column}>
            <div className={`${styles.whiteBox} ${styles.formBox}`}>
                <img src={require("images/logo.png")} alt="instagram" />
                {props.action === "login" && <LoginForm />}
                {props.action === "signup" && <SignupForm />}
            </div>
            <div className={styles.whiteBox}>
            {props.action === "login" && (
                <p>
                    {context.t("계정이 없으신가요?")}{" "}
                    <span 
                        onClick={props.changeAction} 
                        className={styles.changeLink
                    }>
                        {context.t("가입하기")}
                    </span>
                </p>
            )}
            {props.action === "signup" && (
                <p>{context.t("계정이 있으신가요?")} {" "}
                    <span
                        onClick={props.changeAction}
                        className={styles.changeLink
                    }>
                        {context.t("로그인")}
                    </span>
                </p>
            )}
            {/* {(() => {
                switch(props.action){
                    case "login":
                        return (
                            <p>
                                계정이 없으신가요?{" "}
                                <span 
                                    onClick={props.changeAction} 
                                    className={styles.changeLink
                                }>
                                    가입하기
                                </span>
                            </p>
                        );
                    case "signup":
                        return (
                            <p>계정이 있으신가요? {" "}
                                <span
                                    onClick={props.changeAction}
                                    className={styles.changeLink
                                    }>
                                    로그인
                            </span>
                            </p>
                        );
                    default:
                        null
                }
            })()} */}

            </div>
            <div className={styles.appBox}>
                <span>{context.t("앱을 다운로드하세요.")}</span>
                <div className={styles.appstores}>
                    <img src={require("images/ios.png")}
                    alt={context.t("App Store에서 다운로드 하기")} />
                    <img src={require("images/android.png")}
                    alt={context.t("다운로드하기 Google Play")} />
                </div>
            </div>
        </div>
    </main>
);


Auth.contextTypes = {
    t: PropTypes.func.isRequired
}

export default Auth;