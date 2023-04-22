import React from "react";
import "./Quiz.css";
import Clock from "../../../../../assets/Icons/clock-blue.svg";
import Calender from "../../../../../assets/Icons/calendar.svg";

const Quiz = () => {
	return (
		<div className='quiz'>
			<div className='quiz-data'>
				<p>Quiz-1 : Data Types</p>
				<p>16 December 2021, Thursday</p>
				<p>Quiz Details</p>
				<div className='quiz-details'>
					<div className='qestions'>
						<p>10</p>
						<p>Questions</p>
					</div>
					<div className='duration'>
						<p> - </p>
						<p> Duration </p>
					</div>
					<div className='score'>
						<p>125</p>
						<p>Total Score</p>
					</div>
					<div className='quiz-details2'>
						<p>Start :</p>
						<p>
							<img src={Calender} alt='clock' />
							<span>16 Dec 2021</span>
						</p>
						<p>
							<img src={Clock} alt='clock' />
							<span>07 : 30 PM</span>
						</p>
					</div>
					<div className='quiz-details2'>
						<p>Due :</p>
						<p>
							<img src={Calender} alt='clock' />
							<span>19 Dec 2021</span>
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

export default Quiz;
