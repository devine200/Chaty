import React from 'react'
import AuthHeader from '../components/auth-header';
import AuthLayout from '../components/auth-layout';
import Link from 'next/link';
import Image from 'next/image';

import authLogo from "../../images/chaty-logo.png";
import styles from "../../styles/auth-layout.module.css";
import ForgotPassForm from '../components/forgot-pass-form';

const ForgotPassPage = () => {
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
					<h4 className={styles.authTopHead}>Reset Password</h4>
					<p className={styles.authBottomHead}>
          Reset Password With Chaty.
					</p>
				</div>
			</AuthHeader>
			<ForgotPassForm />
      <footer className="mt-12 text-center">
				<p className="mb-4">
				Remember it?{" "}
					<Link href="/auth/signin" style={{"color": "var(--ct-btn-bg)"}}>Signin</Link>
				</p>
				<p>
					© 2024 Chaty. Crafted with  by SamDev
				</p>
			</footer>
		</AuthLayout>
	);
}

export default ForgotPassPage