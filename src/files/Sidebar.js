"use client";
import React, { useState } from "react";
import Image from "next/image";

import sidebar from "@/components/css/Sidebar.module.css";

import LogoSVG from "@/components/icons/logo";
import HomeSVG from "@/components/icons/home";
import TeamSVG from "@/components/icons/teams";
import TaskSVG from "@/components/icons/task";
import MessageSVG from "@/components/icons/message";
import NotificationSVG from "@/components/icons/notification";
import SettingSVG from "@/components/icons/setting";

import kushal from "../../../../../../kushal.jpeg";
const index = () => {
	const [hovered, setHovered] = useState(false);
	const [activeItem, setActiveItem] = useState("Task");

	const toggleHover = () => setHovered(!hovered);

	return (
		<>
			<nav
				className={sidebar.container}
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
			>
				<ol className={sidebar.siteNavigation}>
					<header className={sidebar.header}>
						{hovered ? (
							`Trackio`
						) : (
							<LogoSVG className={sidebar.icon} />
						)}
					</header>
					<ul className={sidebar.navigationList}>
						<li
							className={`${sidebar.iconContainer} ${
								activeItem === "Home" ? sidebar.active : ""
							}`}
						>
							<HomeSVG
								stroke={activeItem === "Home" ? "#157bff" : ""}
								className={sidebar.icon}
							/>
							{hovered ? "Home" : ""}
						</li>
						<li
							className={`${sidebar.iconContainer} ${
								activeItem === "Profile" ? sidebar.active : ""
							}`}
						>
							<TeamSVG
								stroke={
									activeItem === "Profile" ? "#157bff" : ""
								}
								className={sidebar.icon}
							/>
							{hovered ? "Profile" : ""}
						</li>
						<li
							className={`${sidebar.iconContainer} ${
								activeItem === "Task" ? sidebar.active : ""
							}`}
						>
							<TaskSVG
								stroke={activeItem === "Task" ? "#157bff" : ""}
								className={sidebar.icon}
							/>
							{hovered ? "Task" : ""}
						</li>
						<li
							className={`${sidebar.iconContainer} ${
								activeItem === "Message" ? sidebar.active : ""
							}`}
						>
							<MessageSVG
								stroke={
									activeItem === "Message" ? "#157bff" : ""
								}
								className={sidebar.icon}
							/>
							{hovered ? "Message" : ""}
						</li>
						<li
							className={`${sidebar.iconContainer} ${
								activeItem === "Notification"
									? sidebar.active
									: ""
							}`}
						>
							<NotificationSVG
								stroke={
									activeItem === "Notification"
										? "#157bff"
										: ""
								}
								className={sidebar.icon}
							/>
							{hovered ? "Notification" : ""}
						</li>
					</ul>
				</ol>
				<ol className={sidebar.userActions}>
					<li className={sidebar.iconContainer}>
						<SettingSVG className={sidebar.icon} />
						{hovered ? `Settings` : ``}
					</li>
					<ul className={sidebar.userProfile}>
						<li className={sidebar.avatarContainer}>
							<Image
								src={kushal}
								className={sidebar.avatar}
								alt="User Avatar"
							/>
							<span className={sidebar.avatarStatus} />
						</li>
						{hovered ? (
							<>
								<div className={sidebar.userDetails}>
									<div className={sidebar.avatarName}>
										Kushal Agarwal
									</div>
									<div className={sidebar.avatarMail}>
										kushagarwal11ag@gmail.com
									</div>
								</div>
							</>
						) : (
							""
						)}
					</ul>
				</ol>
			</nav>
		</>
	);
};

export default index;
