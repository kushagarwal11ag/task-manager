"use client";
import authService from "@/appwrite/auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";

const ProfileCard = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		(async () => {
			const userData = await authService.getCurrentUser();
			if (userData) {
				setUser(userData);
			}
		})();
	}, []);

	return (
		user && (
			<>
				<div>
					<div>
						<div>
							<Avatar img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
						</div>
						<div>
							<p>{user.name}</p>
							<div>
								<button>FREE</button>
							</div>
						</div>
					</div>
					<div>
						<div>
							<p>Display Name</p>
							<p>{user.name}</p>
						</div>
						<div>
							<p>Email Id</p>
							<p>{user.email}</p>
						</div>
						<div>
							<p>Phone Number</p>
							<p>999-888-7777</p>
						</div>
						<div>
							<p>Password</p>
							<p>********</p>
						</div>
					</div>
					<div>
						<Link href={"/logout"}>Logout</Link>
					</div>
				</div>
			</>
		)
	);
};

export default ProfileCard;
