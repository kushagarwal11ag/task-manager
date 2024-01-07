import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import MenuModal from "./modal/MenuModal";

import task from "@/components/css/Task.module.css";

import Label from "@/files/Label";

import MessageSVG from "@/components/icons/message";
import MenuSVG from "@/components/icons/menu";
import avatar from "../../public/avatar.jpg";

const Task = ({ title, content, labels = [] }) => {
	const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
	const [menuModalPosition, setMenuModalPosition] = useState({ top: 0, right: 0 });

	const menuRef = useRef(null);

	const openMenuModal = () => {
		if (menuRef.current) {
			const rect = menuRef.current.getBoundingClientRect();
			setMenuModalPosition({
				top: rect.bottom + window.scrollY,
            left: rect.right + window.scrollX
			});
		}
		setIsMenuModalOpen(true);
	};
	const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setIsMenuModalOpen(false);
		}
	};
	useEffect(() => {
		if (isMenuModalOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuModalOpen]);

	return (
		<>
			<section className={task.taskCard}>
				<div className={task.taskHeader}>
					<div className={task.taskLabelGroup}>
						{labels.length
							? labels.map((label) => (
									<Label
										key={label.color}
										labelColor={label.color}
										labelName={label.data}
									/>
							  ))
							: ""}
					</div>
					<MenuSVG ref={menuRef} onClick={openMenuModal} />
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
							<div className={task.taskCommentCount}>
								12 comments
							</div>
						</div>
					</div>
				</div>
			</section>
			<MenuModal
				ref={menuRef}
				isOpen={isMenuModalOpen}
				style={menuModalPosition}
				onClose={() => setIsMenuModalOpen(false)}
			/>
		</>
	);
};

export default Task;
