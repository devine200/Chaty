import React from "react";
import Link from "next/link";
import Image from "next/image";

import AuthLayout from "../components/auth-layout";
import AuthHeader from "../components/auth-header";

import authLogo from "../../images/chaty-logo.png";
import styles from "../../styles/auth-layout.module.css";
import SignUpForm from "../components/sign-up-form";

const SignInPage = () => {
	return (
		<AuthLayout>
			<AuthHeader>
				<Link href="/">
					<Image
						src={authLogo}
						alt="chaty logo"
						style={{
							width: "7.5rem",
							height: "1.875rem",
							marginBottom: "3rem",
						}}
					/>
				</Link>
				<div className="text-center">
					<h4 className={styles.authTopHead}>Register</h4>
					<p className={styles.authBottomHead}>
					Get your Chatvia account now.
					</p>
				</div>
			</AuthHeader>
			<SignUpForm />
			<footer className="mt-12 text-center">
				<p className="mb-4">
				Already have an account ?{" "}
					<Link href="/auth/signin" style={{"color": "var(--ct-btn-bg)"}}>Signin</Link>
				</p>
				<p>
					© 2024 Chaty. Crafted with  by SamDev
				</p>
			</footer>
		</AuthLayout>
	);
};

export default SignInPage;
