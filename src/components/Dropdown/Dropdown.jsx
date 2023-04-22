import React, { useEffect, useRef, useState } from "react";
import "./Dropdown.css";
import { useLocation } from "react-router-dom";

const Dropdown = ({ dropDown, setDropdown }) => {
	const location = useLocation();
	const codes = ["ECRD", "FSAR222222", "DS261121", "DS031221"];
	const [selected, setSelected] = useState(["DS031221", 3]);
	const dropdownRef = useRef(null);
	const onDropChange = () => {
		setDropdown(!dropDown);
	};
	const codeChangeHandler = (e, code, idx) => {
		e.preventDefault();
		setSelected([code, idx]);
	};
	useEffect(() => {
		const handleClickOutside = (event) => {
			const dropdownDiv = document.querySelector(".dropdown");
			const dropArrow = document.querySelector(".arrow");
			if (
				dropdownDiv &&
				!dropdownDiv.contains(event.target) &&
				!dropArrow.contains(event.target)
			) {
				setDropdown(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropDown]);

	return (
		<div className='dropdown'>
			<div className='line1'>
				<span className='menu'>
					<span className='code'>{selected[0]}</span>

					<div
						className='dropdowndiv'
						ref={dropdownRef}
						style={{
							visibility:
								location.pathname === "/home"
									? "visible"
									: "hidden",
						}}
					>
						{dropDown ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='30'
								height='30'
								viewBox='0 0 24 24'
								className='arrow'
								onClick={onDropChange}
							>
								<path fill='white' d='m7 14l5-5l5 5H7z' />
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='30'
								height='30'
								viewBox='0 0 24 24'
								className='arrow'
								onClick={onDropChange}
							>
								<path fill='white' d='m7 10l5 5l5-5H7z' />
							</svg>
						)}
					</div>
				</span>
				<span className='course-name'>Data Scientist Program</span>
			</div>

			<div className={`line2 ${dropDown ? "line2hide" : ""}`}>
				<p
					className='line2-heading'
					style={{ display: dropDown ? "block" : "none" }}
				>
					Select Program
				</p>
				<div className='codes'>
					{codes.map((item, idx) => (
						<span
							style={{ display: dropDown ? "block" : "none" }}
							key={idx}
							onClick={(e) => codeChangeHandler(e, item, idx)}
							className={`allcodes ${
								selected[1] === idx ? "selected" : ""
							}`}
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
