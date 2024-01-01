import React from "react";

import color from "@/components/css/color.module.css";

const Label = ({ labelColor, labelName }) => {
	return (
		<>
			<div className={color[labelColor + "WithBg"]}>{labelName}</div>
		</>
	);
};

export default Label;
