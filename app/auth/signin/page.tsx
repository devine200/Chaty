import React from "react";
import Link from "next/link";
import AuthLayout from "../components/auth-layout";

const SignInPage = () => {
	return (
		<AuthLayout>
      <div>
        <div>Chaty</div>
        <div>
          <div>Sign In</div>
          <div>Sign in to continue to Chaty</div>
        </div>
        <div>Sign Up Form</div>
        <div>Don&apos;t have an account? <Link href="/signup">Signup now</Link></div>
      </div>
		</AuthLayout>
	);
};

export default SignInPage;
