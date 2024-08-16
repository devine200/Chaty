import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"
import styles from "../../styles/auth-layout.module.css";

interface AuthFormInputProps {
	label: string;
	icon: StaticImageData;
	inputType?: string | "text";
	hasForgotPass?: boolean | false;
}

const AuthFormInput = ({
	label,
	icon,
	inputType,
	hasForgotPass,
}: AuthFormInputProps) => {
	const iconHolderClassName = `${styles.authIconHolder} rounded-l-md p-4`;
	const inputClassName = `${styles.authInput}`;
	const placeholder = `Enter ${label}`;

	return (
		<div className="flex flex-col mb-8">
			{hasForgotPass ? (
				<div className="flex justify-between">
          <label className="capitalize font-medium mb-4">{label}</label>
          <Link href="/auth/forgot" style={{
            color: "var(--ct-secondary-color)",
            fontSize: "13px"
          }}>Forgot password?</Link>
        </div>
			) : (
				<label className="capitalize font-medium mb-4">{label}</label>
			)}
			<div className="flex">
				<div className={iconHolderClassName}>
					<Image src={icon} width={14} height={14} alt="user icon" />
				</div>
				<input
					className={inputClassName}
					type={inputType}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export default AuthFormInput;
