import React, { useEffect } from "react";
import "./Modules.css";
import Sidebar from "./components/sidebar/Sibebar";
import ModuleContent from "./components/ModuleContent/ModuleContent";
import { useLocation, useNavigate } from "react-router-dom";

const Modules = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (pathname === "/modules" || pathname === "/modules/") {
			navigate("/modules/topic");
		}
	}, [location]);
	return (
		<div className='modules'>
			<Sidebar />
			<ModuleContent />
		</div>
	);
};

export default Modules;
