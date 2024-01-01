import * as React from "react";
const SVGComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 23.086 23.063"
		style={{
			enableBackground: "new 0 0 512 512",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<path
			d="M14.257 3.866 1.555 16.569a.506.506 0 0 0-.132.232L.015 22.452a.502.502 0 0 0 .132.475.5.5 0 0 0 .353.146.497.497 0 0 0 .121-.015l5.651-1.408a.499.499 0 0 0 .232-.132L19.207 8.816zm8.097-1.732L20.94.72c-.945-.945-2.592-.944-3.536 0l-1.732 1.732 4.95 4.95 1.732-1.732c.472-.472.732-1.1.732-1.768s-.26-1.296-.732-1.768zm0 0"
			fill={props.fill || "#898e99"}
			data-original="#000000"
		/>
	</svg>
);
export default SVGComponent;
