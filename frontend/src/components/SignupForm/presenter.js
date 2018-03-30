import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";


const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>{context.t("친구들의 사진과 동영상을 보려면 가입하세요.")}</h3>
        <FacebookLogin
            appId="1958443777804513"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFacebookLogin} 
            cssClass={formStyles.button} 
            icon="fa-facebook-official" 
            textButton={context.t("Facebook으로 로그인")}
        />
        <span className={formStyles.divider}>{context.t("또는")}</span>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input 
                type="email" 
                placeholder={context.t("이메일")} 
                className={formStyles.textInput} 
                value={props.emailValue} 
                onChange={props.handleInputChange} 
                name="email"
            />
            <input 
                type="text" 
                placeholder={context.t("성")} 
                className={formStyles.textInput} 
                value={props.name} 
                onChange={props.handleInputChange} 
                name="name"
            />
            <input 
                type="username" 
                placeholder={context.t("이름")} 
                className={formStyles.textInput} 
                value={props.username} 
                onChange={props.handleInputChange} 
                name="username"
            />
            <input 
                type="password" 
                placeholder={context.t("비밀번호")} 
                className={formStyles.textInput} 
                value={props.password} 
                onChange={props.handleInputChange} 
                name="password"
            />
            <input 
                type="submit" 
                value={context.t("가입")} 
                className={formStyles.button} 
            />
        </form>
        <p className={formStyles.terms}>{context.t("가입하면 Instagram의")} <span>{context.t("약관 및 개인정보처리방침")}</span>{context.t("에 동의하게 됩니다.")}</p>
    </div>
);

SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    nameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
}

export default SignupForm;