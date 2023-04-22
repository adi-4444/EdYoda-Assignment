import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import T from "../../../../assets/Icons/topic.svg";
import AT from "../../../../assets/Icons/activeTopic.svg";
import Q from "../../../../assets/Icons/moduleQuiz.svg";
import AQ from "../../../../assets/Icons/activeModuleQuiz.svg";
import A from "../../../../assets/Icons/assignment.svg";
import AA from "../../../../assets/Icons/activeAssignment.svg";

const Sibebar = () => {
	const { pathname } = useLocation();

	return (
		<div className='sidebar'>
			<Link
				to='/modules/topic'
				className={`sidebar-link ${
					pathname === "/modules/topic/sessionplan" ||
					pathname === "/modules/topic/prewatchvideos" ||
					pathname === "/modules/topic/sessionrecordings" ||
					pathname === "/modules/topic/references"
						? "side-active"
						: ""
				}`}
			>
				{" "}
				<div className='sidebar-icons'>
					{location.pathname === "/modules/topic" ? (
						<img src={AT} alt='AT' />
					) : (
						<img src={T} alt='T' />
					)}
				</div>
				<p className='sidebar-title'>Python Loops</p>
			</Link>
			<Link
				to='/modules/quiz'
				className={` sidebar-link ${
					location.pathname === "/modules/quiz" ? "side-active" : ""
				}`}
			>
				<div className='sidebar-icons'>
					{location.pathname === "/modules/quiz" ? (
						<img src={AQ} alt='AQ' />
					) : (
						<img src={Q} alt='Q' />
					)}
				</div>
				<p className='sidebar-title'>Quiz-1: Data Types</p>
			</Link>
			<Link
				to='/modules/assignment'
				className={` sidebar-link ${
					location.pathname === "/modules/assignment"
						? "side-active"
						: ""
				}`}
			>
				<div className='sidebar-icons'>
					{location.pathname === "/modules/assignment" ? (
						<img src={AA} alt='AA' />
					) : (
						<img src={A} alt='A' />
					)}
				</div>
				<p className='sidebar-title'>
					Assignment-1: Operations | Loops
				</p>
			</Link>
		</div>
	);
};

export default Sibebar;
