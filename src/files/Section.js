import React from "react";

import section from "@/components/css/Section.module.css";
import color from "@/components/css/color.module.css";

import PlusSVG from "@/components/icons/plus";

import Task from "@/files/Task";

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

const Section = ({ sectionTitle, customColor }) => {
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
						<div className={section.sectionTitle}>
							{sectionTitle}
						</div>
						<div
							className={`${section.taskCount} ${
								color[customColor + "Bg"]
							}`}
						>
							2
						</div>
					</div>
					<PlusSVG stroke={customColorConverted[customColor]} />
				</section>
				<div
					className={`${section.horizontalRule} ${
						color[customColor + "Bg"]
					}`}
				/>
				<section className={`${section.taskContainer} ${section[customColor + "Scrollbar"]}`}>
					<Task taskTitle="Brainstorming" />
					<Task taskTitle="Not in mood" />
					<Task taskTitle="Not in mood" />
				</section>
			</section>
		</>
	);
};

export default Section;
