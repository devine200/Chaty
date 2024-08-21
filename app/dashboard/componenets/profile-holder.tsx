import React from "react";
import Image from "next/image";
import optionLogo from "../../images/more.png"

const ProfileHolder = () => {
	return (
		<div className="flex justify-between">
			<h3 className="text-xl">My Profile</h3>
            <a href="#">
                <Image src={optionLogo} alt="option logo" width={24} height={24}/>
            </a>
		</div>
	);
};

export default ProfileHolder;
