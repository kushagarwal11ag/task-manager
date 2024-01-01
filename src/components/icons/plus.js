import * as React from "react";
const SVGComponent = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke={props.stroke || "#898e99"}
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-plus"
			{...props}
		>
			<path d="M12 5v14m-7-7h14" />
		</svg>
	);
};

export default SVGComponent;
