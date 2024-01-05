"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Navbar from "./Navbar";
import Section from "@/files/Section";

import { TaskProvider } from "@/context/task/TaskContext";
import useSection from "@/context/section/useSection";

import Modal from "./Modal";

import dashboard from "@/components/css/Dashboard.module.css";

import CalendarSVG from "@/components/icons/calendar";
import ArrowDownSVG from "@/components/icons/arrowDown";
import FilterSVG from "@/components/icons/filter";
import ShareSVG from "@/components/icons/share";
import PlusSVG from "@/components/icons/plus";
import SectionSVG from "@/components/icons/section";
import EditSVG from "@/components/icons/edit";
import StackSVG from "@/components/icons/stack";
import BoardSVG from "@/components/icons/board";
import emptyGif from "/public/empty.gif";

import avatar from "../../public/avatar.jpg";

const Dashboard = () => {
	const [sectionDirection, setSectionDirection] = useState("board");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { sections, deleteSection } = useSection();

	useEffect(() => {
		if (!sections.length) setSectionDirection("stack");
		else setSectionDirection("board");
	}, [sections]);

	return (
		<TaskProvider>
			<main className={dashboard.dashboard}>
				<Navbar />
				<header className={dashboard.boardTitleContainer}>
					<section className={dashboard.boardInformation}>
						<section className={dashboard.boardName}>
							<div className={dashboard.boardTitle}>
								Mobile app
							</div>
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
								<span className={dashboard.iconText}>
									Filter
								</span>
								<ArrowDownSVG className={dashboard.icon} />
							</button>
							<button className={dashboard.boardButton}>
								<CalendarSVG className={dashboard.icon} />
								<span className={dashboard.iconText}>
									Today
								</span>
								<ArrowDownSVG className={dashboard.icon} />
							</button>
						</section>
						<section className={dashboard.boardExtraActions}>
							<button
								className={dashboard.boardButton}
								onClick={() => setIsModalOpen(true)}
							>
								<SectionSVG />
								<span className={dashboard.iconText}>
									Section
								</span>
								<PlusSVG className={dashboard.icon} />
							</button>
							<button className={dashboard.boardButton}>
								<ShareSVG className={dashboard.icon} />
								<span className={dashboard.iconText}>
									Share
								</span>
								<ArrowDownSVG className={dashboard.icon} />
							</button>
							<div className={dashboard.taskView}>
								<button
									className={dashboard.viewTasks}
									onClick={() => {
										sections.length &&
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
										sections.length &&
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
						{sections.length ? (
							sections.map((section) => {
								return (
									<Section
										key={section.id}
										id={section.id}
										title={section.title}
										customColor={section.theme}
									/>
								);
							})
						) : (
							<Image
								src={emptyGif}
								className={dashboard.gif}
								alt="No tasks added"
							/>
						)}
					</section>
				</header>
			</main>
			<Modal mode="Section" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</TaskProvider>
	);
};

export default Dashboard;
