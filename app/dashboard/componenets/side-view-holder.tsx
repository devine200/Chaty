import React from "react";
import styles from "../../styles/dashboard.module.css";
import ProfileHolder from "./profile-holder";
import Accordian from "./accordian";
import profileLogo from "../../images/profile_d.png";

const SideViewHolder = () => {
	const sideViewHolderClassName = `${styles.sideViewHolder}`;
	return (
		<div className={sideViewHolderClassName}>
			<ProfileHolder />
			<div className="py-5">
				<p className="text-[var(--ct-secondary-color)]">
					If several languages coalesce, the grammar of the resulting
					language is more simple and regular than that of the
					individual.
				</p>
				<Accordian icon={profileLogo} name="About">
					<ul>
						<li className="flex flex-col mb-3">
							<span className="text-[var(--ct-secondary-color)]">
								Name
							</span>
							<span className="text-[var(--ct-primary-color)]">
								Patricia Smith
							</span>
						</li>
						<li className="flex flex-col mb-3">
							<span className="text-[var(--ct-secondary-color)]">
								Email
							</span>
							<span className="text-[var(--ct-primary-color)]">
								adc@123.com
							</span>
						</li>
						<li className="flex flex-col mb-3">
							<span className="text-[var(--ct-secondary-color)]">
								Time
							</span>
							<span className="text-[var(--ct-primary-color)]">
								1:40 AM
							</span>
						</li>
						<li className="flex flex-col mb-3">
							<span className="text-[var(--ct-secondary-color)]">
								Location
							</span>
							<span className="text-[var(--ct-primary-color)]">
								California, USA
							</span>
						</li>
					</ul>
				</Accordian>
			</div>
		</div>
	);
};

export default SideViewHolder;
