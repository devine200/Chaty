"use client";
import React, {useState} from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/dashboard.module.css";
import angleUpLogo from "../../images/next.png";

interface AccordianProps {
    name: string;
    icon: StaticImageData;
    children: React.ReactNode;
}

const Accordian = ({name, icon, children}:AccordianProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const accordianBodyClassName = `p-4 bg-white overflow-y-hidden transition-all ${isOpen ? "" : "max-h-0 hidden"}`
	
    const handleOnClick = (e:any) => {
        console.log(isOpen)
        setIsOpen(isOpen=>!isOpen)
    }

    return (
		<div>
			<div onClick={handleOnClick} className="flex justify-between items-center mt-3 p-3 bg-[var(--ct-accordian-header-bg)] drop-shadow-sm rounded-sm cursor-pointer">
				<p className="flex items-center">
					<Image
						src={icon}
						alt="profile logo"
						style={{
							width: "12px",
							height: "12px",
						}}
					/>
					<span className="pl-2 inline-block">{name}</span>
				</p>
				<Image
					src={angleUpLogo}
					alt="angle logo"
					className={isOpen ? styles.accordianAngleDown : styles.accordianAngleUp}
					style={{
						width: "12px",
						height: "12px",
					}}
				/>
			</div>
			<div className={accordianBodyClassName}>
				{children}
			</div>
		</div>
	);
};

export default Accordian;
