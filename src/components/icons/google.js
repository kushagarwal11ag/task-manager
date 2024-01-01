import * as React from "react";
const SVGComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		style={{
			enableBackground: "new 0 0 512 512",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<path
			d="m5.319 14.504-.836 3.118-3.053.065A11.954 11.954 0 0 1 0 12c0-1.99.484-3.866 1.342-5.519h.001l2.718.499 1.191 2.702A7.142 7.142 0 0 0 4.867 12c0 .881.16 1.725.452 2.503z"
			fill="#fbbb00"
			data-original="#fbbb00"
		/>
		<path
			d="M23.79 9.758a12.038 12.038 0 0 1-.052 4.748 12 12 0 0 1-4.225 6.853l-.001-.001-3.424-.175-.485-3.025a7.152 7.152 0 0 0 3.077-3.652h-6.417V9.758H23.79z"
			fill="#518ef8"
			data-original="#518ef8"
		/>
		<path
			d="m19.512 21.357.001.001A11.951 11.951 0 0 1 12 24c-4.57 0-8.543-2.554-10.57-6.313l3.889-3.183a7.134 7.134 0 0 0 10.284 3.654l3.909 3.2z"
			fill="#28b446"
			data-original="#28b446"
		/>
		<path
			d="m19.66 2.763-3.887 3.183A7.137 7.137 0 0 0 5.252 9.682l-3.909-3.2h-.001A11.997 11.997 0 0 1 12 0c2.912 0 5.581 1.037 7.66 2.763z"
			fill="#f14336"
			data-original="#f14336"
		/>
	</svg>
);
export default SVGComponent;
