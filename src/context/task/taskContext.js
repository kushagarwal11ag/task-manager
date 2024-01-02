import { createContext, useState } from "react";

export const TaskContext = createContext({
	tasks: [],
	addTask: () => {},
	deleteTask: () => {},
});

export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		setTasks([...tasks, task]);
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
