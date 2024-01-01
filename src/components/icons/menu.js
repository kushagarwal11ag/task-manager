import * as React from "react";
const SVGComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 1.5 1.5"
		style={{
			enableBackground: "new 0 0 512 512",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<path
			fill={props.fill || "#000"}
			d="M.914.75A.164.164 0 1 1 .75.586.165.165 0 0 1 .914.75zM.281.586A.164.164 0 1 0 .445.75.165.165 0 0 0 .281.586zm.938 0a.164.164 0 1 0 .164.164.165.165 0 0 0-.164-.164z"
			data-original="#000000"
		/>
	</svg>
);
export default SVGComponent;
