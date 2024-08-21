"use client";
import React from "react";
import Image from "next/image";

import styles from "../../styles/dashboard.module.css";
import profileImg from "../../images/profilePicture.jpg";

import profileIcon from "../../images/profile_d.png";
import settingIcon from "../../images/setting_d.png";
import logoutIcon from "../../images/logout.png";
import PopUpOptionMenu, { MenuBtns } from "./pop-up-option-menu";

const SideBarProfileButton = () => {
	const profileImageClassName = `rounded-full ${styles.navProfileImg}`;

	const profileMenuBtns: MenuBtns[] = [
		{
			name: "Profile",
			imgSrc: profileIcon,
		},
		{
			name: "Settings",
			imgSrc: settingIcon,
		},
		{
			name: "hr",
			imgSrc: profileIcon,
		},
		{
			name: "Logout",
			imgSrc: logoutIcon,
		},
	];

	return (
		<PopUpOptionMenu optionBtns={profileMenuBtns} position={{bottom: "3rem"}}>
			<Image
				src={profileImg}
				alt="profile image"
				width={34}
				height={34}
				className={profileImageClassName}
			/>
		</PopUpOptionMenu>
	);
};

export default SideBarProfileButton;
