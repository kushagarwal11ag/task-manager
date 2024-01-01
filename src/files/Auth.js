"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import authService from "@/appwrite/auth";
import useAuth from "@/context/useAuth";

import auth from "@/components/css/Auth.module.css";

import UserSVG from "@/components/icons/user";
import MailSVG from "@/components/icons/mail";
import PassSVG from "@/components/icons/password";
import GoogleSVG from "@/components/icons/google";
import FacebookSVG from "@/components/icons/facebook";

const Auth = () => {
	const router = useRouter();
	const { setAuthStatus } = useAuth();

	const [credentials, setCredentials] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [loader, setLoader] = useState("");
	const [formStatus, setFormStatus] = useState("");
	const [error, setError] = useState("");
	const [loginEnabled, setLoginEnabled] = useState(true);

	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const passRef = useRef(null);

	useEffect(() => {
		setCredentials({
			name: "",
			email: "",
			password: "",
		});
	}, [error]);

	const onChange = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoader("loading");
		try {
			let session;
			if (loginEnabled) {
				session = await authService.login(credentials);
			} else {
				session = await authService.createUserAccount(credentials);
			}

			setCredentials({
				name: "",
				email: "",
				password: "",
			});
			if (session) {
				const userData = await authService.getCurrentUser();
				if (userData) {
					setAuthStatus(true);
					setLoader("loaded");
					setFormStatus("Authentication success");
					setError("success");
					router.push("/profile");
				}
			}
		} catch (error) {
			setFormStatus(error.message);
			setError("error");
			setLoader("");
		}
	};
	const clearFields = async () => {
		setLoader("");
		setFormStatus("");
		setError("");
		setCredentials({
			name: "",
			email: "",
			password: "",
		});
	};

	return (
		<main className={auth.main}>
			<section className={auth.card}>
				<div className={auth.image}></div>
				<div className={auth.contentBody}>
					<form className={auth.form} onSubmit={handleSubmit}>
						{formStatus && (
							<p
								className={`${auth.formStatusMessage} ${
									error === "error"
										? auth.error
										: error === "success"
										? auth.success
										: ""
								}`}
							>
								{formStatus}
							</p>
						)}
						{!loginEnabled && (
							<div
								className={`${auth.inputBox} ${
									error === "error"
										? auth.error
										: error === "success"
										? auth.success
										: ""
								}`}
								onClick={() => {
									nameRef.current.focus();
								}}
							>
								<UserSVG
									stroke={
										error === "error"
											? "#b42318"
											: error === "success"
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
								error === "error"
									? auth.error
									: error === "success"
									? auth.success
									: ""
							}`}
							onClick={() => {
								emailRef.current.focus();
							}}
						>
							<MailSVG
								stroke={
									error === "error"
										? "#b42318"
										: error === "success"
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
								error === "error"
									? auth.error
									: error === "success"
									? auth.success
									: ""
							}`}
							onClick={() => {
								passRef.current.focus();
							}}
						>
							<PassSVG
								stroke={
									error === "error"
										? "#b42318"
										: error === "success"
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
							{loader === "loading"
								? "Authenticating"
								: loader === "loaded"
								? "Authenticated"
								: "Submit"}
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
								Don't have an account?{" "}
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
		</main>
	);
};

export default Auth;
