"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import loader from "@/components/css/Loader.module.css";

import gif from "../../public/spinner.gif";

const Load = () => {
	const loadingArr = [
		"Preparing your task manager...",
		"Getting things ready for you...",
		"Bringing order to chaos...",
		"One moment, we're getting everything in order...",
		"Making productivity simple and easy...",
		"Loading the future of your productivity...",
	];

	const [randomText, setRandomText] = useState("");

	useEffect(() => {
		setRandomText(
			loadingArr[Math.floor(Math.random() * loadingArr.length)]
		);
	}, []);

	return (
		<div className={loader.loader}>
			<Image src={gif} alt="Loading page gif" width={200} height={200} />
			<p>{randomText}</p>
		</div>
	);
};

export default Load;
