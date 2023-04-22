import React from "react";
import "./Home.css";
import DA from "../../assets/Icons/Data-Analysis.png";
import DW from "../../assets/Icons/Data Wrangling.png";
import AVATAR from "../../assets/avatar.png";

const Home = () => {
	return (
		<div className='home'>
			<div className='upcoming-certification'>
				<p className='heading'>Upcoming Certifications</p>
				<div className='upcoming-details'>
					<div className='certi-sec1'>
						<img src={DA} alt='icon' height={82} />
						<div className='sec1-details'>
							<p>CERTIFICATION | ATTEMPT 1</p>
							<div className='course-name'>
								DATA ANALYSIS <br />
								CERTIFICATION
							</div>
							<p>COMPLETED | 21 MAR 2022</p>
						</div>
					</div>
					<div className='certi-sec2'>
						<div>Exam Structure</div>
						<div>
							Round : <span className='pill'>MCQS</span>
							<span className='pill'>CODING</span>
						</div>
						<div>
							Round2 : <span className='pill'>PROJECT</span>
						</div>
					</div>
					<div className='certi-sec3'>
						<button>VIEW EXAM DETAILS</button>
					</div>
				</div>
			</div>

			<div className='continue-learning'>
				<p className='heading'>Continue Learning</p>
				<p className='module-title'>VIEW MODULE DETAILS</p>

				<div className='learning-sec'>
					<div className='learning-sec1'>
						<div className='sec1-1'>
							<div className='subsec-1-1'>
								<img src={DW} alt='icon' height={80} />
								<div>
									<p>
										DATA WRANGLING &<br />
										VISUALIZATION
									</p>
									<div>
										<img
											src={AVATAR}
											alt='avatar'
											height={40}
										/>
										<span>Test Instructor</span>
									</div>
								</div>
							</div>
							<div className='subsec-1-2'>
								<div className='subsec-1-2-data'>
									<p>Live Sessions</p>
									<div>
										<p>0/13</p>
										<div className='progress'></div>
									</div>
								</div>
								<div className='subsec-1-2-data'>
									<p>Assignments</p>
									<div>
										<p>0/3</p>
										<div className='progress'></div>
									</div>
								</div>
								<div className='subsec-1-2-data'>
									<p>MCQ Quiz</p>
									<div className='subsec-1-2-data-quiz'>
										<p>0/6</p>
										<div className='progress'></div>
									</div>
								</div>
							</div>
						</div>

						<div className='sec1-2'>
							<div>
								Today's Plan
								<p>21 March 2022</p>
							</div>
							<p>
								Data Transformation using <br />
								Pandas - 3
							</p>
							<div>
								<span>Daily Feedback</span>
								<span>opens at 07:30 PM</span>
							</div>
							<p>JOIN LIVE SESSION</p>
							<p>BEGINS AT 07:30 PM</p>
						</div>
					</div>
					<div className='learning-sec2'>
						<p>Progress Overview</p>
						<div className='box'>
							<div>
								<span>0 %</span>
								<span>Overall Grade</span>
							</div>
							<div></div>
						</div>
						<div className='box'>
							<div>
								<span>0 %</span>
								<span>Attendance</span>
							</div>
							<div></div>
						</div>
						<p>VIEW DETAILED PROGRESS</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
