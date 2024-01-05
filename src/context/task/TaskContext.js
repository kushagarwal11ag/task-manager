import { createContext, useContext, useState } from "react";

export const TaskContext = createContext({
	tasks: [
		{
			id: 1,
			sectionId: 1,
			labels: [
				{ color: "pink", data: "reading" },
				{ color: "blue", data: "writing" },
			],
			title: "Lord Of The Mysteries",
			description:
				"The Fool that doesn’t belong to this era; The Mysterious Ruler above the gray fog; The King of Yellow and Black who wields good luck.",
		},
		{
			id: 2,
			sectionId: 1,
			labels: [
				{ color: "red", data: "sales" },
				{ color: "green", data: "marketing" },
			],
			title: "Sea God Kalvetua",
			description:
				"Blessed of the sea and spirit world; Guardian of the Rorsted Archipelago; Ruler of the Undersea Creatures; Master of Tsunamis and Storms; The Great Kalvetua.",
		},
		{
			id: 3,
			sectionId: 2,
			labels: [
				{ color: "purple", data: "UI/UX" },
				{ color: "indigo", data: "web dev" },
			],
			title: "Gehrman Sparrow",
			description:
				"The Blessed of the Spirit World and the Sefirah Castle; The Mystery stemming from ancient times; The witness of an extended history; Protector of Backlund magic and drama performers; The great Gehrman Sparrow.",
		},
	],
	addTask: () => {},
	deleteTask: () => {},
});

export const TaskProvider = ({ children }) => {
	const defaultTasks = useContext(TaskContext).tasks;
	const [tasks, setTasks] = useState(defaultTasks);

	const addTask = (task, sId) => {
		setTasks([{ ...task, sectionId: sId }, ...tasks]);
	};

	const deleteTask = (taskId) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

	return (
		<TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
