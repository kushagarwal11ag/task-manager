import React, { useState } from "react";

import useSection from "@/context/section/useSection";
import useTask from "@/context/task/useTask";

import modal from "@/components/css/Modal.module.css";
import color from "@/components/css/color.module.css";

import PlusSVG from "@/components/icons/plus";
import CloseSVG from "@/components/icons/close";

const Modal = ({ mode, isOpen, onClose }) => {
	const { sections, addSection } = useSection();
	const { tasks, addTask } = useTask();

	const themes = [
		"default",
		"yellow",
		"orange",
		"red",
		"purple",
		"green",
		"navyBlue",
		"lightBlue",
		"blue",
		"indigo",
		"pink",
		"rose",
	];

	const [sectionCredentials, setSectionCredentials] = useState({
		title: "",
		selectedTheme: "default",
	});
	const [taskCredentials, setTaskCredentials] = useState({
		sectionId: 1,
		labels: [
			{ color: "blue", data: "hello" },
			{ color: "green", data: "bye" },
			{ color: "red", data: "nihao" },
			{ color: "orange", data: "yoyo" },
		],
		title: "",
		description: "",
	});

	const onChange = (event) => {
		mode === "Section"
			? setSectionCredentials({
					...sectionCredentials,
					[event.target.name]: event.target.value,
			  })
			: mode === "Task" &&
			  setTaskCredentials({
					...taskCredentials,
					[event.target.name]: event.target.value,
			  });
	};

	const clearFields = () => {
		mode === "Section"
			? setSectionCredentials({
					title: "",
					selectedTheme: "default",
			  })
			: mode === "Task" &&
			  setTaskCredentials({
					title: "",
					description: "",
			  });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const id = Math.random().toString(36);
		try {
			mode === "Section"
				? addSection({
						id,
						title: sectionCredentials.title,
						theme: sectionCredentials.selectedTheme,
				  })
				: mode === "Task" &&
				  addTask({
						id,
						sectionId: taskCredentials.sectionId,
						labels: taskCredentials.labels,
						title: taskCredentials.title,
						description: taskCredentials.description,
				  });
			clearFields();
			onClose();
		} catch (error) {
			console.error("Error adding item:", error);
		}
	};

	if (!isOpen) return null;
	return (
		<section className={modal.modalOverlay}>
			<form className={modal.modal} onSubmit={handleSubmit}>
				<CloseSVG
					onClick={() => {
						onClose();
						clearFields();
					}}
					className={modal.close}
				/>
				{mode === "Section" ? (
					<>
						<section className={modal.themeContainer}>
							{themes.map((theme) => (
								<div
									key={theme}
									onClick={() =>
										onChange({
											target: {
												name: "selectedTheme",
												value: theme,
											},
										})
									}
									className={`${modal.coloredEllipse} ${
										color[theme + "Border"]
									} ${
										sectionCredentials.selectedTheme ===
										theme
											? color[theme + "Bg"]
											: ""
									}`}
								></div>
							))}
						</section>
						<input
							type="text"
							name="title"
							value={sectionCredentials.title}
							onChange={onChange}
							required
							aria-describedby="Section title"
							placeholder="Enter Section Title"
						/>
					</>
				) : (
					mode === "Task" && (
						<>
							<div className={modal.labelInput}>
								<div>Labels</div>
								<PlusSVG stroke="#000" />
							</div>
							{taskCredentials.labels &&
								taskCredentials.labels.length > 0 && (
									<section className={modal.labelContainer}>
										{taskCredentials.labels.map((label) => (
											<div
												key={label.data}
												className={
													color[
														label.color + "WithBg"
													]
												}
											>
												<div>{label.data}</div>
												<CloseSVG
													stroke="#898e99"
													className={modal.icon}
													onClick={() => {
														setTaskCredentials(
															(prevState) => ({
																...prevState,
																labels: prevState.labels.filter(
																	(
																		newLabel
																	) =>
																		!(
																			newLabel.color ===
																				label.color &&
																			newLabel.data ===
																				label.data
																		)
																),
															})
														);
													}}
												/>
											</div>
										))}
									</section>
								)}
							<input
								type="text"
								name="title"
								value={taskCredentials.title}
								onChange={onChange}
								required
								aria-describedby="Task title"
								placeholder="Enter Task Title"
							/>
							<textarea
								name="description"
								value={taskCredentials.description}
								onChange={onChange}
								rows={5}
								aria-describedby="Task description"
								placeholder="Enter Task Description"
							></textarea>
						</>
					)
				)}
				<button
					type="submit"
					// className={auth.submitButton}
				>
					Submit
				</button>
			</form>
		</section>
	);
};

export default Modal;
