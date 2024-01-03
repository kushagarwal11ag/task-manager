import { useContext } from "react";
import SectionContext from "./SectionContext";

const useSection = () => {
	const data = useContext(SectionContext);
	return data;
};

export default useSection;
