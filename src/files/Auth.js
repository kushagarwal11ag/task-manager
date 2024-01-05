"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import toast, { Toaster } from "react-hot-toast";

import authService from "@/appwrite/auth";
import useAuth from "@/context/auth/useAuth";

import auth from "@/components/css/Auth.module.css";

import UserSVG from "@/components/icons/user";
import MailSVG from "@/components/icons/mail";
import PassSVG from "@/components/icons/password";
import GoogleSVG from "@/components/icons/google";
import FacebookSVG from "@/components/icons/facebook";

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState(undefined);

	useEffect(() => {
		function handleResize() {
			setWindowSize(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
};

const Auth = () => {
	const videoSrc = "/books.webm";
	const windowSize = useWindowSize();

	const router = useRouter();
	const { setAuthStatus } = useAuth();

	const [credentials, setCredentials] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [status, setStatus] = useState({
		formStatus: "",
		error: "",
	});
	const [loginEnabled, setLoginEnabled] = useState(true);
	const [videoError, setVideoError] = useState(false);

	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const passRef = useRef(null);

	useEffect(() => {
		setCredentials({
			name: "",
			email: "",
			password: "",
		});
	}, [status.error]);

	const onChange = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		let sessionPromise;
		try {
			if (loginEnabled) {
				sessionPromise = authService.login(credentials);
			} else {
				sessionPromise = authService.createUserAccount(credentials);
			}

			toast.promise(sessionPromise, {
				loading: "Authenticating...",
				success: "Successfully Authenticated",
				error: "Authentication Error",
			});

			await sessionPromise;
			setCredentials({
				name: "",
				email: "",
				password: "",
			});

			const userDataPromise = authService.getCurrentUser();
			toast.promise(userDataPromise, {
				loading: "Fetching user data...",
				success: "Rerouting",
				error: "Error fetching user data",
			});
			await userDataPromise;
			setAuthStatus(true);
			setStatus((prevStatus) => ({ ...prevStatus, error: "success" }));
			router.push("/profile");
		} catch (error) {
			setStatus({
				formStatus: error.message,
				error: "error",
			});
		}
	};
	const clearFields = async () => {
		setStatus({ formStatus: "", error: "" });
		setCredentials({
			name: "",
			email: "",
			password: "",
		});
	};

	return (
		<>
			<Toaster />
			<section className={auth.card}>
				{windowSize >= 768 && (
					<>
						{!videoError ? (
							<video
								autoPlay
								muted
								loop
								className={auth.video}
								onError={() => setVideoError(true)}
							>
								<source src={videoSrc} type="video/webm" />
								Your browser does not support HTML5 video.
							</video>
						) : (
							<div className={auth.image}></div>
						)}
					</>
				)}
				<div className={auth.contentBody}>
					<form className={auth.form} onSubmit={handleSubmit}>
						{status.formStatus && (
							<p
								className={`${auth.formStatusMessage} ${
									status.error === "error"
										? auth.error
										: status.error === "success"
										? auth.success
										: ""
								}`}
							>
								{status.formStatus}
							</p>
						)}
						{!loginEnabled && (
							<div
								className={`${auth.inputBox} ${
									status.error === "error"
										? auth.error
										: status.error === "success"
										? auth.success
										: ""
								}`}
								onClick={() => {
									nameRef.current.focus();
								}}
							>
								<UserSVG
									stroke={
										status.error === "error"
											? "#b42318"
											: status.error === "success"
											? "#027a48"
											: "#898e99"
									}
								/>
								<input
									type="text"
									name="name"
									value={credentials.name}
									onChange={onChange}
									required
									ref={nameRef}
									aria-describedby="name"
									placeholder="Name"
								/>
							</div>
						)}
						<div
							className={`${auth.inputBox} ${
								status.error === "error"
									? auth.error
									: status.error === "success"
									? auth.success
									: ""
							}`}
							onClick={() => {
								emailRef.current.focus();
							}}
						>
							<MailSVG
								stroke={
									status.error === "error"
										? "#b42318"
										: status.error === "success"
										? "#027a48"
										: "#898e99"
								}
							/>
							<input
								type="email"
								name="email"
								value={credentials.email}
								onChange={onChange}
								required
								ref={emailRef}
								aria-describedby="email"
								placeholder="Email"
							/>
						</div>
						<div
							className={`${auth.inputBox} ${
								status.error === "error"
									? auth.error
									: status.error === "success"
									? auth.success
									: ""
							}`}
							onClick={() => {
								passRef.current.focus();
							}}
						>
							<PassSVG
								stroke={
									status.error === "error"
										? "#b42318"
										: status.error === "success"
										? "#027a48"
										: "#898e99"
								}
							/>
							<input
								type="password"
								name="password"
								value={credentials.password}
								onChange={onChange}
								required
								ref={passRef}
								placeholder="Password"
							/>
						</div>
						<button
							type="submit"
							className={auth.submitButton}
							style={{ textAlign: "center" }}
						>
							Submit
						</button>
					</form>
					<section className={auth.socialLogin}>
						<button
							className={`${auth.socialProvider} ${auth.googleProvider}`}
							onClick={() => {
								authService.createAuthSession("google");
							}}
						>
							<GoogleSVG />
							<p className={auth.socialProviderText}>
								Continue with Google
							</p>
						</button>
						<button
							className={`${auth.socialProvider} ${auth.facebookProvider}`}
							onClick={() => {
								authService.createAuthSession("facebook");
							}}
						>
							<FacebookSVG />
							<p className={auth.socialProviderText}>
								Continue with Facebook
							</p>
						</button>
					</section>
					<div className={auth.authMode}>
						{loginEnabled ? (
							<>
								Don&apos;t have an account?{" "}
								<span
									onClick={() => {
										clearFields();
										setLoginEnabled(false);
									}}
								>
									Create one
								</span>
							</>
						) : (
							<>
								Already have an account?{" "}
								<span
									onClick={() => {
										clearFields();
										setLoginEnabled(true);
									}}
								>
									Login
								</span>
							</>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Auth;
