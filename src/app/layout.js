import "@/components/css/reset.css";

export const metadata = {
	title: "Trackio",
	description: "A modern Task Manager for all your managing needs",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/svg"
					sizes="32x32"
					href="/logo.svg"
				/>
				<title>Trackio - Task Manager</title>
			</head>
			<body>{children}</body>
		</html>
	);
}
