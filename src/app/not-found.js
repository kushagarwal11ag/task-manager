"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Loader from "@/files/Loader";

import notFound from "@/components/css/NotFound.module.css";

function Custom404() {
	const router = useRouter();
	const [loader, setLoader] = useState(false);

	return !loader ? (
		<main className={notFound.main}>
			<section className={notFound.content}>
				<div className={notFound.text}>
					<header className={notFound.textHeader}>
						404: Lost in Chaos
					</header>
					<p className={notFound.textDetails}>
						Enjoy the glitchy vibes!
					</p>
					<button
						className={notFound.textButton}
						onClick={() => {
							setLoader(true);
							router.replace("/");
							setLoader(false);
						}}
					>
						Home
					</button>
				</div>
				<div className={notFound.image}></div>
			</section>
		</main>
	) : (
		<Loader />
	);
}

export default Custom404;
