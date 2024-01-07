import React, { forwardRef } from "react";

const MenuModal = forwardRef(({ isOpen, style, onClose }, ref) => {
	if (!isOpen) return null;
	return (
		<div
			ref={ref}
			style={{ position: "absolute", ...style }}
			onClick={onClose}
		>
			<button
				onClick={() => {
					console.log("hello");
				}}
			>
				This is a modal component.
			</button>
		</div>
	);
});

MenuModal.displayName = "MenuModal";
export default MenuModal;
