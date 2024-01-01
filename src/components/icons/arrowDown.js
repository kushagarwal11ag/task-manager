import * as React from "react";
const SVGComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 1.125 1.125"
		style={{
			enableBackground: "new 0 0 512 512",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<path
			fill={props.fill || "#898e99"}
			fillRule="evenodd"
			d="M.121.356a.094.094 0 0 1 .133 0l.309.308.309-.309a.094.094 0 1 1 .133.133L.63.863a.094.094 0 0 1-.133 0L.122.488a.094.094 0 0 1 0-.133z"
			clipRule="evenodd"
			data-original="#000000"
		/>
	</svg>
);
export default SVGComponent;
