"use client";
import authService from "@/appwrite/auth";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Login = () => {
	const router = useRouter();
	const { setAuthStatus } = useAuth();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const login = async (e) => {
		e.preventDefault();
		try {
			const session = await authService.login(formData);
			if (session) {
				setAuthStatus(true);
				router.push("/profile");
			}
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div>
			<div>
				<div>
					<span>
						<img src="/favicon.ico" alt="Logo" />
					</span>
				</div>
				<h2>Sign in to your account</h2>
				<p>
					Don&apos;t have any account?&nbsp;
					<Link href="/signup">Sign Up</Link>
				</p>
				{error && <p>{error}</p>}
				<form onSubmit={login} className="mt-8">
					<div>
						<div>
							<label htmlFor="email">Email address</label>
							<div>
								<input
									type="email"
									value={formData.email}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											email: e.target.value,
										}))
									}
									placeholder="Email"
									id="email"
									required
								/>
							</div>
						</div>
						<div>
							<div>
								<label htmlFor="password">Password</label>
							</div>
							<div>
								<input
									type="password"
									placeholder="Password"
									value={formData.password}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											password: e.target.value,
										}))
									}
									id="password"
									required
								/>
							</div>
						</div>
						<div>
							<button type="submit">Sign in</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
