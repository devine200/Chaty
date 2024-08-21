import React from "react";
import Image from "next/image";
import profileImage from "../../images/profilePicture.jpg";
import optionLogo from "../../images/more.png";
import PopUpOptionMenu, { MenuBtns } from "./pop-up-option-menu";
import UserActiveStatus from "./user-active-status";

const ProfileHolder = () => {
    const menuBtns: MenuBtns[] = [
		{
			name: "Profile",
		},
		{
			name: "Settings",
		},
		{
			name: "hr",
		},
		{
			name: "Logout",
		},
	];

	return (
		<div className="py-3 border-b border-[var(--ct-border-color)]">
			<header className="flex justify-between">
				<h3 className="text-xl text-[var(--ct-primary-color)]">My Profile</h3>
				<PopUpOptionMenu optionBtns={menuBtns} position={{bottom: "-8rem", left: "-7rem"}}>
					<Image src={optionLogo} alt="option logo" width={24} height={24}/>
				</PopUpOptionMenu>
			</header>
			
			<div className="flex flex-col items-center py-6">
				<Image src={profileImage} className="rounded-full border-4 border-solid border-[var(--ct-border-color)] drop-shadow-sm mb-6" alt="profile-img" style={{width: "6rem", height: "6rem"}} />
				<p className="font-semibold text-[var(--ct-primary-color)]">Patricia Smith</p>
				<p className="flex items-center text-[var(--ct-secondary-color)]"><UserActiveStatus isActive={true}/>Active</p>
			</div>
		</div>
	);
};

export default ProfileHolder;
