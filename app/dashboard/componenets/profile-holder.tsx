import React from "react";
import Image from "next/image";
import optionLogo from "../../images/more.png"
import PopUpOptionMenu, { MenuBtns } from "./pop-up-option-menu";

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
		<div className="flex justify-between">
			<h3 className="text-xl">My Profile</h3>
            <PopUpOptionMenu optionBtns={menuBtns} position={{bottom: "-8rem", left: "-7rem"}}>
                <Image src={optionLogo} alt="option logo" width={24} height={24}/>
            </PopUpOptionMenu>
		</div>
	);
};

export default ProfileHolder;
