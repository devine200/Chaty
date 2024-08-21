'use client';
import React from 'react';
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/dashboard.module.css";

interface SideNaveButtonProps {
    defaultUrl: StaticImageData;
    activeUrl: StaticImageData;
    description?: string | null;
    isActive?: boolean | false;
}

// const SideNavButton = ({ imgUrl }:SideNaveButtonProps) => {
const SideNavButton = ({defaultUrl, activeUrl, isActive, description}:SideNaveButtonProps) => {
  const navButtonClassName = `text-center inline-block p-5 rounded-lg relative ${styles.sideNavButton} ${isActive ? styles.sideNavButtonActive : ""}`;
  const navButtonDetailClassName = `absolute bg-black py-2 rounded-md ${styles.sideNavButtonDetail}`
  const handleOnClick = (e:any) => {
    e.preventDefault();
  }

  return (
    <a onClick={handleOnClick} className={navButtonClassName}>
        { description && <div className={navButtonDetailClassName}>{description}</div> }
        <Image src={isActive ? activeUrl : defaultUrl} width={24} height={24} alt="nav icon" />
    </a>
  )
}

export default SideNavButton