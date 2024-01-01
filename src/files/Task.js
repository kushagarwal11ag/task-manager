import React from "react";
import Image from "next/image";

import task from "@/components/css/Task.module.css";

import MessageSVG from "@/components/icons/message";
import MenuSVG from "@/components/icons/menu";
import kushal from "../../../../../../kushal.jpeg";

import Label from "@/files/Label";

const Task = ({ taskTitle }) => {
	return (
		<section className={task.taskCard}>
			<div className={task.taskHeader}>
				<div className={task.taskLabelGroup}>
					<Label labelColor="pink" labelName="Testing" />
					<Label labelColor="blue" labelName="Sales" />
				</div>
				<div className={task.taskMenu}>
					<MenuSVG />
				</div>
			</div>
			<div className={task.taskBody}>
				<div className={task.taskTitle}>{taskTitle}</div>
				<p className={task.taskDescription}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Velit, modi?
				</p>
			</div>
			<div className={task.taskFooter}>
				<div className={task.avatarContainer}>
					<Image
						src={kushal}
						className={task.avatar}
						alt="User Avatar"
					/>
					<Image
						src={kushal}
						className={task.avatar}
						alt="User Avatar"
					/>
					<Image
						src={kushal}
						className={task.avatar}
						alt="User Avatar"
					/>
				</div>
				<div className={task.additionalTaskInformation}>
					<div className={task.taskComments}>
						<MessageSVG className={task.icon} />
						<div className={task.taskCommentCount}>12 comments</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Task;
