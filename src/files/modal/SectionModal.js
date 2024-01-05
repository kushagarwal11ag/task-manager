import React, { useState } from "react";

import useSection from "@/context/section/useSection";

import modal from "@/components/css/SectionModal.module.css";
import color from "@/components/css/color.module.css";

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

const Modal = ({ isOpen, onClose }) => {
	const { addSection } = useSection();

	const [sectionCredentials, setSectionCredentials] = useState({
		title: "",
		selectedTheme: "default",
	});

	const onChange = (event) => {
		setSectionCredentials({
			...sectionCredentials,
			[event.target.name]: event.target.value,
		});
	};

	const clearFields = () => {
		setSectionCredentials({
			title: "",
			selectedTheme: "default",
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const id = Math.random().toString(36);
		addSection({
			id,
			title: sectionCredentials.title,
			theme: sectionCredentials.selectedTheme,
		});
		clearFields();
		onClose();
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
				<section className={modal.themeContainer}>
					{themes.map((theme) => (
						<button
							key={theme}
							type="button"
							name="selectedTheme"
							value={theme}
							onClick={onChange}
							className={`${modal.coloredEllipse} ${
								color[theme + "Border"]
							} ${
								sectionCredentials.selectedTheme === theme
									? color[theme + "Bg"]
									: ""
							}`}
						></button>
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
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default Modal;
