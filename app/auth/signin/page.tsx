import React from "react";
import Link from "next/link";
import Image from "next/image";
import authLogo from "../../images/chaty-logo.png";
import AuthLayout from "../components/auth-layout";
import AuthHeader from "../components/auth-header";

import styles from "../../styles/auth-layout.module.css";

const SignInPage = () => {
	return (
		<AuthLayout>
			<AuthHeader>
				<Image
					src={authLogo}
					alt="chaty logo"
					style={{
            width: "120px",
            height: "30px",
            marginBottom: "48px"
          }}
				/>
        <div className="text-center">
          <h4 className={styles.authTopHead}>Sign In</h4>
          <p className={styles.authBottomHead}>Sign in to continue to Chaty</p>
        </div>
			</AuthHeader>
			<div>Sign In Form</div>
			<div>
				Don&apos;t have an account?{" "}
				<Link href="/signup">Signup now</Link>
			</div>
		</AuthLayout>
	);
};

export default SignInPage;
