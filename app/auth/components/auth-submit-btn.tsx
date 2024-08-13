import React from "react";
import styles from "../../styles/auth-layout.module.css";

interface AuthSubmitBtnProps {
	text: string;
}

const AuthSubmitBtn = ({text}:AuthSubmitBtnProps) => {
    const authBtnClassName = `${styles.authSubmitBtn} w-full px-2 py-4 rounded-md white`;
	
    return (
		<div>
			<button type="submit" className={authBtnClassName}>
				{text}
			</button>
		</div>
	);
};

export default AuthSubmitBtn;
