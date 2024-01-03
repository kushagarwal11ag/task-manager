import { createContext, useContext, useState } from "react";

export const SectionContext = createContext({
	sections: [
		{
			id: 1,
			theme: "red",
			title: "To Do",
		},
		{
			id: 2,
			theme: "orange",
			title: "In Progress",
		},
		{
			id: 3,
			theme: "default",
			title: "Done",
		},
	],
	addSection: () => {},
	deleteSection: () => {},
});

export const SectionProvider = ({ children }) => {
	const defaultSections = useContext(SectionContext).sections;
	const [sections, setSections] = useState(defaultSections);

	const addSection = (section) => {
		setSections([...sections, section]);
	};

	const deleteSection = (sectionId) => {
		setSections(sections.filter((section) => section.id !== sectionId));
	};

	return (
		<SectionContext.Provider value={{ sections, addSection, deleteSection }}>
			{children}
		</SectionContext.Provider>
	);
};

export default SectionContext;
