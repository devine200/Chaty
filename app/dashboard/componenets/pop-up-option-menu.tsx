"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/dashboard.module.css";

export interface MenuBtns {
	name: string;
	imgSrc?: StaticImageData;
	handleOnClick?: (e: any) => void | ((e: any) => {});
}

export interface MenuPosition {
	bottom?: string | "0";
	left?: string | "0";
}

interface PopUpOptionMenuProps {
	children: React.ReactNode;
	position?: MenuPosition;
	optionBtns: MenuBtns[];
}

const PopUpOptionMenu = ({
	children,
	optionBtns,
	position,
}: PopUpOptionMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const optionMenuClassName = `flex-col absolute bg-white py-1 ${
		styles.navOptionBtnMenu
	} ${isOpen ? "flex" : "hidden"}`;
	const optionMenuBtnClassName = `flex justify-between px-6 py-2 ${styles.navOptionBtnMenuBtn}`;

	const handleOnClick = (e: any) => {
		e.preventDefault();
		setIsOpen((isOpen) => !isOpen);
	};

	return (
		<a href="#" onClick={handleOnClick} className="relative">
			<div className={optionMenuClassName} style={position}>
				{optionBtns.map((optionBtn, key) =>
					optionBtn.name === "hr" ? (
						<hr key={key} />
					) : (
						<button
							key={key}
							className={optionMenuBtnClassName}
							onClick={optionBtn.handleOnClick}
						>
							{optionBtn.name}{" "}
							{optionBtn.imgSrc === undefined ? (
								<></>
							) : (
								<Image
									src={optionBtn.imgSrc}
									alt="side menu button logo"
									width={16}
									height={16}
								/>
							)}
						</button>
					)
				)}
			</div>
			{children}
		</a>
	);
};

export default PopUpOptionMenu;
