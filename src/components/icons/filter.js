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
		className="feather feather-filter"
		{...props}
	>
		<path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
	</svg>
);
export default SVGComponent;
