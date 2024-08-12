'use client';
import React from "react";

interface FormCardProps {
	children: React.ReactNode;
	onSubmit(e:React.FormEvent): void;
}

const FormCard = ({ children, onSubmit }:FormCardProps) => {
	return (
		<div className="bg-white flex flex-col p-10 rounded-md">
			<form onSubmit={onSubmit}>
                {children}
            </form>
		</div>
	);
};

export default FormCard;
