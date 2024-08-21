import React from "react";
import styles from "../../styles/dashboard.module.css";
import ProfileHolder from "./profile-holder";

const SideViewHolder = () => {
	const sideViewHolderClassName = `${styles.sideViewHolder}`;
	return (
        <div className={sideViewHolderClassName}>
            <ProfileHolder />
        </div>
    );
};

export default SideViewHolder;
