import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Modules from "./components/Modules/Modules.jsx";
import Instructors from "./components/Instructors/Instructors.jsx";
import Topic from "./components/Modules/components/ModuleContent/Topic/Topic.jsx";
import Quiz from "./components/Modules/components/ModuleContent/Quiz/Quiz.jsx";
import Assignment from "./components/Modules/components/ModuleContent/Assignment/Assignment.jsx";
import SessionPlan from "./components/Modules/components/ModuleContent/Topic/SessionPlan/SessionPlan.jsx";
import PreWatch from "./components/Modules/components/ModuleContent/Topic/PreWatch/PreWatch.jsx";
import SessionRec from "./components/Modules/components/ModuleContent/Topic/SessionRec/SessionRec.jsx";
import References from "./components/Modules/components/ModuleContent/Topic/References/References.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "modules",
				element: <Modules />,
				children: [
					{
						path: "topic",
						element: <Topic />,
						children: [
							{
								path: "sessionplan",
								element: <SessionPlan />,
							},
							{
								path: "prewatchvideos",
								element: <PreWatch />,
							},
							{
								path: "sessionrecordings",
								element: <SessionRec />,
							},
							{
								path: "references",
								element: <References />,
							},
						],
					},
					{
						path: "quiz",
						element: <Quiz />,
					},
					{
						path: "assignment",
						element: <Assignment />,
					},
				],
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
