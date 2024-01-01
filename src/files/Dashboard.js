"use client";
import React, { useState } from "react";
import Image from "next/image";

import Navbar from "./Navbar";
import Section from "@/files/Section";

import dashboard from "@/components/css/Dashboard.module.css";

import CalendarSVG from "@/components/icons/calendar";
import ArrowDownSVG from "@/components/icons/arrowDown";
import FilterSVG from "@/components/icons/filter";
import ShareSVG from "@/components/icons/share";
import EditSVG from "@/components/icons/edit";
import StackSVG from "@/components/icons/stack";
import BoardSVG from "@/components/icons/board";

import avatar from "../../public/avatar.jpg";

const Dashboard = () => {
	const [sectionDirection, setSectionDirection] = useState("board");

	return (
		<main className={dashboard.dashboard}>
			<Navbar />
			<header className={dashboard.boardTitleContainer}>
				<section className={dashboard.boardInformation}>
					<section className={dashboard.boardName}>
						<div className={dashboard.boardTitle}>Mobile app</div>
						<div className={dashboard.boardSettings}>
							<button className={dashboard.editBoardTitle}>
								<EditSVG
									fill="#157bff"
									className={dashboard.icon}
								/>
							</button>
							<button className={dashboard.changeBoard}>
								<ArrowDownSVG
									fill="#157bff"
									className={dashboard.icon}
								/>
							</button>
						</div>
					</section>
					<section className={dashboard.avatarContainer}>
						<Image
							src={avatar}
							className={dashboard.avatar}
							alt="User Avatar"
						/>
						<Image
							src={avatar}
							className={dashboard.avatar}
							alt="User Avatar"
						/>
						<Image
							src={avatar}
							className={dashboard.avatar}
							alt="User Avatar"
						/>
						<Image
							src={avatar}
							className={dashboard.avatar}
							alt="User Avatar"
						/>
						<Image
							src={avatar}
							className={dashboard.avatar}
							alt="User Avatar"
						/>
						<Image
							src={avatar}
							className={dashboard.avatar}
							alt="User Avatar"
						/>
						<button
							className={`${dashboard.avatar} ${dashboard.additionalMembers}`}
						>
							+5
						</button>
					</section>
				</section>
				<section className={dashboard.boardActions}>
					<section className={dashboard.sort}>
						<button className={dashboard.boardButton}>
							<FilterSVG className={dashboard.icon} />
							<span className={dashboard.iconText}>Filter</span>
							<ArrowDownSVG className={dashboard.icon} />
						</button>
						<button className={dashboard.boardButton}>
							<CalendarSVG className={dashboard.icon} />
							<span className={dashboard.iconText}>Today</span>
							<ArrowDownSVG className={dashboard.icon} />
						</button>
					</section>
					<section className={dashboard.boardExtraActions}>
						<button className={dashboard.boardButton}>
							<ShareSVG className={dashboard.icon} />
							<span className={dashboard.iconText}>Share</span>
							<ArrowDownSVG className={dashboard.icon} />
						</button>
						<div className={dashboard.taskView}>
							<button
								className={dashboard.viewTasks}
								onClick={() => {
									setSectionDirection("stack");
								}}
							>
								<StackSVG
									fill={
										sectionDirection === "stack"
											? "#157bff"
											: ""
									}
								/>
							</button>
							<button
								className={dashboard.viewTasks}
								onClick={() => {
									setSectionDirection("board");
								}}
							>
								<BoardSVG
									fill={
										sectionDirection === "board"
											? "#157bff"
											: ""
									}
								/>
							</button>
						</div>
					</section>
				</section>

				<section
					className={`${dashboard.sectionContainer} ${
						sectionDirection === "board"
							? dashboard.gridColumn
							: dashboard.gridRow
					}`}
				>
					<Section sectionTitle="To do" customColor="red" />
					<Section sectionTitle="In progress" customColor="yellow" />
					<Section sectionTitle="Doing" customColor="green" />
					<Section sectionTitle="In review" customColor="rose" />
					<Section sectionTitle="Done" customColor="blue" />
				</section>
			</header>
		</main>
	);
};

export default Dashboard;
