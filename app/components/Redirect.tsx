"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

interface RedirectProps {
    url: string;
}

const Redirect = ({url}:RedirectProps) => {
    const router = useRouter();
    useEffect(() => {
        router.push(url)
    }, [])
	return <></>;
};

export default Redirect;
