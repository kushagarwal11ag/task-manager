"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import authService from "@/appwrite/auth";
import useAuth from "@/context/useAuth";

import Loader from "@/files/Loader";

import navbar from "@/components/css/Navbar.module.css";

import CloseSVG from "@/components/icons/close";
import avatar from "../../public/avatar.jpg";

const Navbar = () => {
	const router = useRouter();
	const { setAuthStatus } = useAuth();

	const [modalStatus, setModalStatus] = useState(false);
	const [modalPosition, setModalPosition] = useState({ top: 0, right: 0 });

	const [user, setUser] = useState(null);
	const [loader, setLoader] = useState(false);

	const buttonRef = useRef(null);

	useEffect(() => {
		//get the exact position to place modal (below Get Started button)
		if (buttonRef.current) {
			const buttonRect = buttonRef.current.getBoundingClientRect();
			setModalPosition({
				top: buttonRect.bottom,
				right: window.innerWidth - buttonRect.right,
			});
		}
		//close modal is user clicks anywhere outside modal
		const handleClickOutsideModal = (e) => {
			if (
				modalStatus &&
				e.target.closest(`.${navbar.modalContent}`) === null
			)
				closeModal();
		};
		document.addEventListener("click", handleClickOutsideModal);

		return () => {
			document.removeEventListener("click", handleClickOutsideModal);
		};
	}, [modalStatus]);

	useEffect(() => {
		(async () => {
			const userData = await authService.getCurrentUser();
			if (userData) {
				setUser(userData);
			}
		})();
	}, []);

	const closeModal = () => {
		setModalStatus(false);
	};

	return loader ? (
		<Loader />
	) : (
		user && (
			<nav className={navbar.container}>
				<header>Hello {user.name}</header>
				<Image
					src={avatar}
					className={navbar.avatar}
					alt="User Avatar"
					ref={buttonRef}
					onClick={() => {
						setModalStatus(true);
					}}
				/>

				{modalStatus && (
					<div
						style={{
							top: modalPosition.top,
							right: modalPosition.right,
						}}
						className={navbar.modalOverlay}
					>
						<button className={navbar.close} onClick={closeModal}>
							<CloseSVG />
						</button>
						<div
							className={navbar.modalContent}
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							<button
								onClick={() => {
									authService.logout().then(() => {
										setAuthStatus(false);
										setLoader(true);
										router.push("/");
										setLoader(false);
									});
								}}
							>
								Log out
							</button>
						</div>
					</div>
				)}
			</nav>
		)
	);
};

export default Navbar;
