import React from "react";
import Link from "next/link";
import Image from "next/image";

import AuthLayout from "../components/auth-layout";
import AuthHeader from "../components/auth-header";

import authLogo from "../../images/chaty-logo.png";
import styles from "../../styles/auth-layout.module.css";
import SignInForm from "../components/sign-in-form";

const SignInPage = () => {
	return (
		<AuthLayout>
			<AuthHeader>
				<Link href="/">
					<Image
						src={authLogo}
						alt="chaty logo"
						style={{
							width: "120px",
							height: "30px",
							marginBottom: "48px",
						}}
					/>
				</Link>
				<div className="text-center">
					<h4 className={styles.authTopHead}>Sign In</h4>
					<p className={styles.authBottomHead}>
						Sign in to continue to Chaty
					</p>
				</div>
			</AuthHeader>
			<SignInForm />
			<footer className="mt-12 text-center">
				<p className="mb-4">
					Don&apos;t have an account?{" "}
					<Link href="/signup" style={{"color": "var(--ct-btn-bg)"}}>Signup now</Link>
				</p>
				<p>
					© 2024 Chaty. Crafted with  by SamDev
				</p>
			</footer>
		</AuthLayout>
	);
};

export default SignInPage;
