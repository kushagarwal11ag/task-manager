import React, { forwardRef } from "react";
const SVGComponent = forwardRef((props, ref) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 1.5 1.5"
			transform="rotate(90)"
			ref={ref}
			{...props}
		>
			<path
				fill={props.fill || "#898e99"}
				d="M.914.75A.164.164 0 1 1 .75.586.165.165 0 0 1 .914.75zM.281.586A.164.164 0 1 0 .445.75.165.165 0 0 0 .281.586zm.938 0a.164.164 0 1 0 .164.164.165.165 0 0 0-.164-.164z"
				data-original="#898e99"
			/>
		</svg>
	);
});
SVGComponent.displayName = "SVGComponent";
export default SVGComponent;
