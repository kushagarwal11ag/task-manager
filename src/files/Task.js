import React from "react";
import Image from "next/image";

import task from "@/components/css/Task.module.css";

import Label from "@/files/Label";

import MessageSVG from "@/components/icons/message";
import MenuSVG from "@/components/icons/menu";
import avatar from "../../public/avatar.jpg";

const Task = ({ title, content, labels }) => {
	return (
		<section className={task.taskCard}>
			<div className={task.taskHeader}>
				<div className={task.taskLabelGroup}>
					{labels.map((label) => (
						<Label
							key={label.data}
							labelColor={label.color}
							labelName={label.data}
						/>
					))}
				</div>
				<div className={task.taskMenu}>
					<MenuSVG />
				</div>
			</div>
			<div className={task.taskBody}>
				<div className={task.taskTitle}>{title}</div>
				<p className={task.taskDescription}>{content}</p>
			</div>
			<div className={task.taskFooter}>
				<div className={task.avatarContainer}>
					<Image
						src={avatar}
						className={task.avatar}
						alt="User Avatar"
					/>
					<Image
						src={avatar}
						className={task.avatar}
						alt="User Avatar"
					/>
					<Image
						src={avatar}
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
