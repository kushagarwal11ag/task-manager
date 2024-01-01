import * as React from "react";
const SVGComponent = (props) => (
	<svg
		preserveAspectRatio="none"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		{...props}
	>
		<path
			d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Zm7.496-8h.01m-4.011 0h.01m-4.01 0h.008"
			stroke={props.stroke || "#898e99"}
		/>
	</svg>
);
export default SVGComponent;
