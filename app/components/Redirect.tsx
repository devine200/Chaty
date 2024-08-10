"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Redirect = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/auth/signin")
    }, [])
	return <></>;
};

export default Redirect;
