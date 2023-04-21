import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ dropDown, setDropdown }) => {
	const codes = ["ECRD", "FSAR222222", "DS261121", "DS031221"];
	const [selected, setSelected] = useState(["DS031221", 3]);
	const onDropChange = () => {
		setDropdown(!dropDown);
	};
	const codeChangeHandler = (e, code, idx) => {
		e.preventDefault();
		setSelected([code, idx]);
	};
	return (
		<div className='dropdown' style={{ height: dropDown ? "18vh" : "8vh" }}>
			<div className='line1'>
				<span className='menu'>
					<span className='code'>{selected[0]}</span>
					<>
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
					</>
				</span>
				<span className='course-name'>Data Scientist Program</span>
			</div>

			<div className='line2'>
				<p className='line2-heading'>Select Program</p>
				<div className='codes'>
					{codes.map((item, idx) => (
						<span
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
