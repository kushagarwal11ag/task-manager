import * as React from "react";
const SVGComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 2.25 2.25"
		style={{
			enableBackground: "new 0 0 512 512",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<path
			data-original="#000000"
			d="M.469 1.219h1.312a.188.188 0 0 1 .188.187v.375a.188.188 0 0 1-.188.188H.469a.188.188 0 0 1-.188-.188v-.375a.188.188 0 0 1 .188-.187zm0-.938h1.312a.188.188 0 0 1 .188.188v.375a.188.188 0 0 1-.188.187H.469A.188.188 0 0 1 .281.844V.469A.188.188 0 0 1 .469.281z"
			fill={props.fill || "#898e99"}
		/>
	</svg>
);
export default SVGComponent;
