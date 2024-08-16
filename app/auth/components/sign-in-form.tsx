'use client';
import React from "react";
import FormCard from "../components/form-card";
import AuthFormInput from "./auth-form-input";
import mailLogo from "../../images/mail.png";
import passLogo from "../../images/form-pass.png";
import AuthCheckBox from "./auth-checkbox";
import AuthSubmitBtn from "./auth-submit-btn";

const SignInForm = () => {
    const handleOnSubmit = (e:React.FormEvent) => {
        e.preventDefault();
    }

	return (
		<FormCard onSubmit={handleOnSubmit}>
		    <AuthFormInput icon={mailLogo} label="email" inputType="email" />
		    <AuthFormInput icon={passLogo} label="password" inputType="password" hasForgotPass={true} />
            <AuthCheckBox />
            <AuthSubmitBtn text="Sign in"/>
		</FormCard>
	);
};

export default SignInForm;
