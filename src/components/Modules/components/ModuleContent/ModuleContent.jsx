import React from "react";
import "./ModuleContent.css";
import { Outlet } from "react-router-dom";

const ModuleContent = () => {
	return (
		<div className='module-content'>
			<Outlet />
		</div>
	);
};

export default ModuleContent;
