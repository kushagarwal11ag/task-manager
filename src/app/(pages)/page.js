"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/context/useAuth";

import Auth from "./auth/page";
import Loader from "@/files/Loader";

const Home = () => {
	const router = useRouter();
	const { authStatus } = useAuth();
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);
		if (authStatus) {
			router.push("/profile");
			setLoader(false);
		} else {
			router.push("/auth");
			setLoader(false);
		}
	}, [authStatus]);

	return loader ? <Loader /> : <></>;
};

export default Home;
