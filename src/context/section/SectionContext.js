import { createContext, useContext, useState } from "react";

export const SectionContext = createContext({
	sections: [
		{
			id: 1,
			title: "To Do",
			theme: "red",
		},
		{
			id: 2,
			title: "In Progress",
			theme: "orange",
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
