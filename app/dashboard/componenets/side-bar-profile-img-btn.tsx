"use client";
import React from "react";
import Image from "next/image";

import profileImg from "../../images/profilePicture.jpg";

import profileIcon from "../../images/profile_d.png";
import settingIcon from "../../images/setting_d.png";
import logoutIcon from "../../images/logout.png";
import PopUpOptionMenu, { MenuBtns } from "./pop-up-option-menu";

const SideBarProfileButton = () => {
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
				className="rounded-full border-2 border-solid border-[var(--ct-border-color)] drop-shadow-sm"
			/>
		</PopUpOptionMenu>
	);
};

export default SideBarProfileButton;
