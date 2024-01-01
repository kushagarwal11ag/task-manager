import * as React from "react";
const SVGComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
        stroke={props.stroke || "#000"}
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-x"
		{...props}
	>
		<path d="M18 6 6 18M6 6l12 12" />
	</svg>
);
export default SVGComponent;
