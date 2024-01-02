import { useContext } from "react";
import TaskContext from "./TaskContext";

const useTask = () => {
	const data = useContext(TaskContext);
	return data;
};

export default useTask;
