import React, { useState } from "react";

import useTask from "@/context/task/useTask";

import modal from "@/components/css/TaskModal.module.css";
import color from "@/components/css/color.module.css";

import PlusSVG from "@/components/icons/plus";
import CloseSVG from "@/components/icons/close";

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

const Modal = ({ sId, isOpen, onClose }) => {
	const { addTask } = useTask();
	const [themeLeft, setThemeLeft] = useState(themes);

	const [taskCredentials, setTaskCredentials] = useState({
		labels: [],
		title: "",
		description: "",
	});
	const [labelCredentials, setLabelCredentials] = useState({
		labelTitle: "",
		labelTheme: "",
	});
	const [isLabelModalOpen, setIsLabelModalOpen] = useState(false);

	const onChange = (event) => {
		setTaskCredentials({
			...taskCredentials,
			[event.target.name]: event.target.value,
		});
	};
	const onChangeLabel = (event) => {
		setLabelCredentials({
			...labelCredentials,
			[event.target.name]: event.target.value,
		});
	};

	const clearFields = () => {
		setTaskCredentials({
			labels: [],
			title: "",
			description: "",
		});
	};
	const clearFieldsLabel = () => {
		setLabelCredentials({
			labelTitle: "",
			labelTheme: "",
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const id = Math.random().toString(36);
		addTask(
			{
				id,
				labels: taskCredentials.labels,
				title: taskCredentials.title,
				description: taskCredentials.description,
			},
			sId
		);
		clearFields();
		setThemeLeft(themes);
		onClose();
	};
	const handleSubmitLabel = () => {
		if (labelCredentials.labelTitle) {
			setTaskCredentials((prevState) => ({
				...prevState,
				labels: [
					...taskCredentials.labels,
					{
						color: labelCredentials.labelTheme,
						data: labelCredentials.labelTitle,
					},
				],
			}));
			setThemeLeft((prevThemes) =>
				prevThemes.filter(
					(theme) => theme !== labelCredentials.labelTheme
				)
			);
			clearFieldsLabel();
			setIsLabelModalOpen(false);
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
				{themeLeft.length > 0 && (
					<button
						className={modal.labelInput}
						type="button"
						onClick={setIsLabelModalOpen}
					>
						<div>Labels</div>
						<PlusSVG stroke="#000" />
					</button>
				)}
				{isLabelModalOpen && (
					<section className={modal.modalOverlay}>
						<section className={modal.modal}>
							<CloseSVG
								onClick={() => {
									setIsLabelModalOpen(false);
									clearFieldsLabel();
								}}
								className={modal.close}
							/>
							<section className={modal.themeContainer}>
								{themeLeft.map((theme) => (
									<button
										key={theme}
										type="button"
										name="labelTheme"
										value={theme}
										onClick={onChangeLabel}
										className={`${modal.coloredEllipse} ${
											color[theme + "Border"]
										} ${
											labelCredentials.labelTheme ===
											theme
												? color[theme + "Bg"]
												: ""
										}`}
									></button>
								))}
							</section>
							<input
								type="text"
								name="labelTitle"
								value={labelCredentials.labelTitle}
								onChange={onChangeLabel}
								required
								aria-describedby="Label title"
								placeholder="Enter Label Title"
							/>
							<button
								type="button"
								onClick={handleSubmitLabel}
								// className={auth.submitButton}
							>
								Submit
							</button>
						</section>
					</section>
				)}
				{taskCredentials.labels &&
					taskCredentials.labels.length > 0 && (
						<section className={modal.labelContainer}>
							{taskCredentials.labels.map((label) => (
								<div
									key={label.color}
									className={color[label.color + "WithBg"]}
								>
									<div>{label.data}</div>
									<CloseSVG
										stroke="#898e99"
										className={modal.icon}
										onClick={() => {
											setTaskCredentials((prevState) => ({
												...prevState,
												labels: prevState.labels.filter(
													(newLabel) =>
														!(
															newLabel.color ===
																label.color &&
															newLabel.data ===
																label.data
														)
												),
											}));
											setThemeLeft((prevState) => [
												...prevState,
												label.color,
											]);
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
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default Modal;
