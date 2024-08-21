"use client";
import React, {useState} from "react";
import Image from "next/image";

import styles from "../../styles/dashboard.module.css";
import profileImg from "../../images/profilePicture.jpg";

import profileIcon from "../../images/profile_d.png";
import settingIcon from "../../images/setting_d.png";
import logoutIcon from "../../images/logout.png";

const SideBarProfileButton = () => {
    const [isOpen, setIsOpen] = useState(false);
	const profileImageClassName = `rounded-full ${styles.navProfileImg}`;
    const profileBtnMenuClassName = `flex-col absolute bottom-10 left-0 bg-white py-1 ${styles.navProfileBtnMenu} ${isOpen ? "flex" : "hidden"}`;
    const profileBtnMenuBtnClassName = `flex justify-between px-6 py-2 ${styles.navProfileBtnMenuBtn}`;

    const handleOnClick = (e:any) => {
        e.preventDefault();
        setIsOpen(isOpen=>!isOpen)
    } 

	return (
		<a href="#" onClick={handleOnClick} className="relative">
            <div className={profileBtnMenuClassName}>
                <button className={profileBtnMenuBtnClassName}>Profile <Image src={profileIcon} alt="side menu button logo" width={16} height={16} /></button>
                <button className={profileBtnMenuBtnClassName}>Settings <Image src={settingIcon} alt="side menu button logo" width={16} height={16} /></button>
                <hr />
                <button className={profileBtnMenuBtnClassName}>Logout <Image src={logoutIcon} alt="side menu button logo" width={16} height={16} /></button>
            </div>
			<Image
				src={profileImg}
				alt="profile image"
				width={34}
				height={34}
				className={profileImageClassName}
			/>
		</a>
	);
};

export default SideBarProfileButton;
