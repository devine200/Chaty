import React from "react";
import Image from "next/image";
import chatyLogo from "../../images/chaty_logo_box.svg";
import styles from "../../styles/dashboard.module.css";
import SideNavButton from "./sidenav-button";
import profileDefaultLogo from "../../images/profile_d.png";
import profileActiveLogo from "../../images/profile.png";
import contactDefaultLogo from "../../images/contacts_d.png";
import contactActiveLogo from "../../images/contacts.png";
import chatDefaultLogo from "../../images/chats_d.png";
import chatActiveLogo from "../../images/chats.png";
import settingDefaultLogo from "../../images/setting_d.png";
import settingActiveLogo from "../../images/setting.png";
import SideBarProfileButton from "./side-bar-profile-img-btn";

const SideBar = () => {
	const sideBarClassName = `flex flex-col justify-between items-center ${styles.sideBar}`;

	return (
		<div className={sideBarClassName}>
			<Image alt="logo" src={chatyLogo} width={32} height={32} />
            <ul>
                <li><SideNavButton defaultUrl={profileDefaultLogo} activeUrl={profileActiveLogo} description="Profile" /></li>
                <li><SideNavButton defaultUrl={chatDefaultLogo} activeUrl={chatActiveLogo} description="Chats" isActive={true}/></li>
                <li><SideNavButton defaultUrl={contactDefaultLogo} activeUrl={contactActiveLogo} description="Contacts" /></li>
                <li><SideNavButton defaultUrl={settingDefaultLogo} activeUrl={settingActiveLogo} description="Settings" /></li>
            </ul>
            <ul>
                <li><SideNavButton defaultUrl={settingDefaultLogo} activeUrl={settingActiveLogo} /></li>
                <li className="flex justify-center"><SideBarProfileButton /></li>
            </ul>
		</div>
	);
};

export default SideBar;
