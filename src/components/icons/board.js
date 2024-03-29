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
			d="M.384.148a.277.277 0 0 0-.126 0 .147.147 0 0 0-.11.11.277.277 0 0 0 0 .126.147.147 0 0 0 .11.11.277.277 0 0 0 .126 0 .147.147 0 0 0 .11-.11.277.277 0 0 0 0-.126.147.147 0 0 0-.11-.11zm0 .483a.277.277 0 0 0-.126 0 .147.147 0 0 0-.11.11.277.277 0 0 0 0 .126.147.147 0 0 0 .11.11.277.277 0 0 0 .126 0 .147.147 0 0 0 .11-.11.277.277 0 0 0 0-.126.147.147 0 0 0-.11-.11zM.867.148a.277.277 0 0 0-.126 0 .147.147 0 0 0-.11.11.277.277 0 0 0 0 .126.147.147 0 0 0 .11.11.277.277 0 0 0 .126 0 .147.147 0 0 0 .11-.11.277.277 0 0 0 0-.126.147.147 0 0 0-.11-.11zm0 .483a.277.277 0 0 0-.126 0 .147.147 0 0 0-.11.11.277.277 0 0 0 0 .126.147.147 0 0 0 .11.11.277.277 0 0 0 .126 0 .147.147 0 0 0 .11-.11.277.277 0 0 0 0-.126.147.147 0 0 0-.11-.11z"
			fill={props.fill || "#898e99"}
			data-original="#000000"
		/>
	</svg>
);
export default SVGComponent;
