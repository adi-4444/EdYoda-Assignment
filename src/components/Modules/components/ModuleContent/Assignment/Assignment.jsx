import React from "react";
import "./Assignment.css";
import Clock from "../../../../../assets/Icons/clock-blue.svg";
import Calender from "../../../../../assets/Icons/calendar.svg";

const Assignment = () => {
	return (
		<div className='assignment'>
			<div className='assignment-data'>
				<p>Assignment-1 : Operations | Loops</p>
				<p>20 December 2021</p>
				<p>Assignment Details</p>
				<div className='assignment-details'>
					<div className='qestions'>
						<p>10</p>
						<p>Questions</p>
					</div>

					<div className='score'>
						<p>125</p>
						<p>Total Score</p>
					</div>
					<div className='assignment-details2'>
						<p>Start :</p>
						<p>
							<img src={Calender} alt='clock' />
							<span>20 December 2021</span>
						</p>
						<p>
							<img src={Clock} alt='clock' />
							<span>07 : 30 PM</span>
						</p>
					</div>
					<div className='assignment-details2'>
						<p>Due :</p>
						<p>
							<img src={Calender} alt='clock' />
							<span>26 December 2021</span>
						</p>
						<p>
							{" "}
							<img src={Clock} alt='clock' />
							<span>11 : 59 PM</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Assignment;
