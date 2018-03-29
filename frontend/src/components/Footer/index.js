import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";


const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>{context.t("Instagram 정보")}</li>
                    <li className={styles.listItem}>{context.t("지원")}</li>
                    <li className={styles.listItem}>{context.t("블로그")}</li>
                    <li className={styles.listItem}>{context.t("홍보 센터")}</li>
                    <li className={styles.listItem}>{context.t("API")}</li>
                    <li className={styles.listItem}>{context.t("채용 정보")}</li>
                    <li className={styles.listItem}>{context.t("개인정보처리방침")}</li>
                    <li className={styles.listItem}>{context.t("약관")}</li>
                    <li className={styles.listItem}>{context.t("디렉터리")}</li>
                    <li className={styles.listItem}>{context.t("프로필")}</li>
                    <li className={styles.listItem}>{context.t("해시태그")}</li>
                    <li className={styles.listItem}>{context.t("언어")}</li>
                </ul>
            </nav>
        </div>
        <div className={styles.column}>
            <span className={styles.copyright}>c 2018 juriestargram</span>
        </div>
    </footer>
);

Footer.contextTypes = {
    t: PropTypes.func.isRequired
}

// import PropTypes from "prop-types";
// class Footer extends React.Component {
//     static contextTypes = {
//         t: PropTypes.func.isRequired
//     }
//     render() {
//         console.log(this.context);
//         return (
//             <footer className={styles.footer}>
//                 <div className={styles.column}>
//                     <nav className={styles.nav}>
//                         <ul className={styles.list}>
//                             <li className={styles.listItem}>{this.context.t("About Us")}</li>
//                             <li className={styles.listItem}>SUPPORT</li>
//                             <li className={styles.listItem}>BLOG</li>
//                             <li className={styles.listItem}>PRESS</li>
//                             <li className={styles.listItem}>API</li>
//                             <li className={styles.listItem}>JOBS</li>
//                             <li className={styles.listItem}>PRIVACY</li>
//                             <li className={styles.listItem}>TERMS</li>
//                             <li className={styles.listItem}>DIRECTORY</li>
//                             <li className={styles.listItem}>LANGUAGE</li>
//                         </ul>
//                     </nav>
//                 </div>
//                 <div className={styles.column}>
//                     <span className={styles.copyright}>c 2018 juriestargram</span>
//                 </div>
//             </footer>
//         )
//     }
// }



export default Footer;