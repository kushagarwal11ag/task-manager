import React, {useState} from "react";
import Image from "next/image";

import TaskModal from "./modal/TaskModal";
import Task from "@/files/Task";

import useTask from "@/context/task/useTask";

import section from "@/components/css/Section.module.css";
import color from "@/components/css/color.module.css";

import PlusSVG from "@/components/icons/plus";
import emptyGif from "/public/empty.gif";

const customColorConverted = {
	default: "#344054",
	yellow: "#b54708",
	orange: "#c4320a",
	red: "#b42318",
	purple: "#6941c6",
	green: "#027a48",
	navyBlue: "#363f72",
	lightBlue: "#026aa2",
	blue: "#175cd3",
	indigo: "#3538cd",
	pink: "#c11574",
	rose: "#c01048",
};

const Section = ({ id, title, customColor }) => {
	const { tasks } = useTask();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const filteredTasks = tasks.filter((task) => task.sectionId === id);
	const totalTasks = filteredTasks.length;

	return (
		<>
			<section
				className={`${section.section} ${
					color[customColor + "WithBg"]
				} `}
			>
				<section className={section.sectionHeader}>
					<div className={section.sectionDetails}>
						<div
							className={`${section.coloredEllipse} ${
								color[customColor + "Bg"]
							}`}
						></div>
						<div className={section.sectionTitle}>{title}</div>
						<div
							className={`${section.taskCount} ${
								color[customColor + "Bg"]
							}`}
						>
							{totalTasks}
						</div>
					</div>
					<PlusSVG
						stroke={customColorConverted[customColor]}
						onClick={() => setIsModalOpen(true)}
						style={{cursor: "pointer"}}
					/>
				</section>
				<div
					className={`${section.horizontalRule} ${
						color[customColor + "Bg"]
					}`}
				/>
				<section
					className={`${section.taskContainer} ${
						section[customColor + "Scrollbar"]
					}`}
				>
					{totalTasks > 0 ? (
						filteredTasks.map((task) => {
							return (
								<Task
									key={task.id}
									title={task.title}
									content={task.description}
									labels={task.labels}
								/>
							);
						})
					) : (
						<Image
							src={emptyGif}
							className={section.gif}
							alt="No tasks added"
						/>
					)}
				</section>
			</section>
			<TaskModal
				sId={id}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
};

export default Section;
