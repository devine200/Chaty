'use client';
import React from "react";
import AuthFormInput from "./auth-form-input";
import FormCard from "./form-card";
import AuthSubmitBtn from "./auth-submit-btn";
import mailLogo from "../../images/mail.png";

const ForgotPassForm = () => {
    const handleOnSubmit = (e:React.FormEvent) => {
        e.preventDefault();
    }

	return (
		<FormCard onSubmit={handleOnSubmit}>
			<AuthFormInput icon={mailLogo} label="email" inputType="email" />
			<AuthSubmitBtn text="Reset" />
		</FormCard>
	);
};

export default ForgotPassForm;
