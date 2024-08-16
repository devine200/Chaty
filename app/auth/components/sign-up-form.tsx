'use client';
import React from "react";
import FormCard from "../components/form-card";
import AuthFormInput from "./auth-form-input";
import mailLogo from "../../images/mail.png";
import userLogo from "../../images/form-user.png";
import passLogo from "../../images/form-pass.png";
import AuthSubmitBtn from "./auth-submit-btn";

const SignUpForm = () => {
    const handleOnSubmit = (e:React.FormEvent) => {
        e.preventDefault();
    }

	return (
		<FormCard onSubmit={handleOnSubmit}>
		    <AuthFormInput icon={mailLogo} label="email" inputType="email" />
		    <AuthFormInput icon={userLogo} label="username" inputType="text" />
		    <AuthFormInput icon={passLogo} label="password" inputType="password" />
            <AuthSubmitBtn text="Register"/>
		</FormCard>
	);
};

export default SignUpForm;
