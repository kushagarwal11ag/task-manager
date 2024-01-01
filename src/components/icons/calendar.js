import * as React from "react";
const SVGComponent = (props) => (
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
		className="feather feather-calendar"
		{...props}
	>
		<rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
		<path d="M16 2v4M8 2v4m-5 4h18" />
	</svg>
);
export default SVGComponent;
