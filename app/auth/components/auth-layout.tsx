"use client";
import React from "react";
import styles from "../../styles/auth-layout.module.css";

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	const classNameTemplate = `flex flex-col justify-center items-center w-screen h-screen ${styles.layout}`;
	return <div className={classNameTemplate}>{children}</div>;
};

export default AuthLayout;
