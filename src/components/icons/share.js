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
		className="feather feather-share-2"
		{...props}
	>
		<circle cx={18} cy={5} r={3} />
		<circle cx={6} cy={12} r={3} />
		<circle cx={18} cy={19} r={3} />
		<path d="m8.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98" />
	</svg>
);
export default SVGComponent;
