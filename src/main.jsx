import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Modules from "./components/Modules/Modules.jsx";
import Content from "./components/main/Content.jsx";
import Instructors from "./components/Instructors/Instructors.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "modules",
				element: <Modules />,
			},
			{
				path: "instructors",
				element: <Instructors />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
