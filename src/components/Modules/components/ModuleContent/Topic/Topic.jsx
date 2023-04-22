import React, { useEffect } from "react";
import "./Topic.css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Topic = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname === "/modules/topic") {
			navigate("/modules/topic/sessionplan");
		}
	}, [location]);
	return (
		<div className='topic'>
			<div className='topic-titles'>
				<p>Python Loops</p>
				<p>15 December 2021, Wednesday, 07:30 PM</p>
				<p>DAILY FEEDBACK</p>
			</div>

			<div className='topic-content'>
				<div className='topic-nav'>
					<Link
						to='/modules/topic/sessionplan'
						className={`topic-link ${
							location.pathname === "/modules/topic/sessionplan"
								? "topic-active"
								: ""
						}`}
					>
						<div className='sidebar-icons'>
							{location.pathname ===
							"/modules/topic/sessionplan" ? (
								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9 1.96875C5.12297 1.96875 1.96875 5.12297 1.96875 9C1.96875 12.877 5.12297 16.0312 9 16.0312C12.877 16.0312 16.0312 12.877 16.0312 9C16.0312 5.12297 12.877 1.96875 9 1.96875ZM9 4.85156C9.18078 4.85156 9.35751 4.90517 9.50783 5.00561C9.65814 5.10605 9.7753 5.24881 9.84448 5.41583C9.91367 5.58285 9.93177 5.76664 9.8965 5.94395C9.86123 6.12126 9.77417 6.28413 9.64634 6.41196C9.51851 6.5398 9.35564 6.62685 9.17833 6.66212C9.00101 6.69739 8.81723 6.67929 8.6502 6.61011C8.48318 6.54093 8.34042 6.42377 8.23998 6.27345C8.13955 6.12313 8.08594 5.94641 8.08594 5.76562C8.08594 5.5232 8.18224 5.2907 8.35366 5.11929C8.52508 4.94787 8.75758 4.85156 9 4.85156ZM10.6875 12.7969H7.59375C7.44457 12.7969 7.30149 12.7376 7.196 12.6321C7.09051 12.5266 7.03125 12.3836 7.03125 12.2344C7.03125 12.0852 7.09051 11.9421 7.196 11.8366C7.30149 11.7311 7.44457 11.6719 7.59375 11.6719H8.57812V8.57812H8.01562C7.86644 8.57812 7.72337 8.51886 7.61788 8.41337C7.51239 8.30788 7.45312 8.16481 7.45312 8.01562C7.45312 7.86644 7.51239 7.72337 7.61788 7.61788C7.72337 7.51239 7.86644 7.45312 8.01562 7.45312H9.14062C9.28981 7.45312 9.43288 7.51239 9.53837 7.61788C9.64386 7.72337 9.70312 7.86644 9.70312 8.01562V11.6719H10.6875C10.8367 11.6719 10.9798 11.7311 11.0852 11.8366C11.1907 11.9421 11.25 12.0852 11.25 12.2344C11.25 12.3836 11.1907 12.5266 11.0852 12.6321C10.9798 12.7376 10.8367 12.7969 10.6875 12.7969Z'
										fill='url(#paint0_linear_2875_43551)'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_2875_43551'
											x1='1.96875'
											y1='7.94531'
											x2='16.0313'
											y2='7.94531'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#0096FF' />
											<stop
												offset='1'
												stopColor='#0048FF'
											/>
										</linearGradient>
									</defs>
								</svg>
							) : (
								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='currentColor'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9 1.96875C5.12297 1.96875 1.96875 5.12297 1.96875 9C1.96875 12.877 5.12297 16.0312 9 16.0312C12.877 16.0312 16.0312 12.877 16.0312 9C16.0312 5.12297 12.877 1.96875 9 1.96875ZM9 4.85156C9.18078 4.85156 9.35751 4.90517 9.50783 5.00561C9.65814 5.10605 9.7753 5.24881 9.84448 5.41583C9.91367 5.58285 9.93177 5.76664 9.8965 5.94395C9.86123 6.12126 9.77417 6.28413 9.64634 6.41196C9.51851 6.5398 9.35564 6.62685 9.17833 6.66212C9.00101 6.69739 8.81723 6.67929 8.6502 6.61011C8.48318 6.54093 8.34042 6.42377 8.23998 6.27345C8.13955 6.12313 8.08594 5.94641 8.08594 5.76562C8.08594 5.5232 8.18224 5.2907 8.35366 5.11929C8.52508 4.94787 8.75758 4.85156 9 4.85156ZM10.6875 12.7969H7.59375C7.44457 12.7969 7.30149 12.7376 7.196 12.6321C7.09051 12.5266 7.03125 12.3836 7.03125 12.2344C7.03125 12.0852 7.09051 11.9421 7.196 11.8366C7.30149 11.7311 7.44457 11.6719 7.59375 11.6719H8.57812V8.57812H8.01562C7.86644 8.57812 7.72337 8.51886 7.61788 8.41337C7.51239 8.30788 7.45312 8.16481 7.45312 8.01562C7.45312 7.86644 7.51239 7.72337 7.61788 7.61788C7.72337 7.51239 7.86644 7.45312 8.01562 7.45312H9.14062C9.28981 7.45312 9.43288 7.51239 9.53837 7.61788C9.64386 7.72337 9.70312 7.86644 9.70312 8.01562V11.6719H10.6875C10.8367 11.6719 10.9798 11.7311 11.0852 11.8366C11.1907 11.9421 11.25 12.0852 11.25 12.2344C11.25 12.3836 11.1907 12.5266 11.0852 12.6321C10.9798 12.7376 10.8367 12.7969 10.6875 12.7969Z'
										fill='url(#paint0_linear_2875_43551)'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_2875_43551'
											x1='1.96875'
											y1='7.94531'
											x2='16.0313'
											y2='7.94531'
											gradientUnits='userSpaceOnUse'
										>
											<stop offset='1' />
										</linearGradient>
									</defs>
								</svg>
							)}
						</div>
						<p>SESSION PlAN</p>
					</Link>
					<Link
						to='/modules/topic/prewatchvideos'
						className={`topic-link ${
							location.pathname ===
							"/modules/topic/prewatchvideos"
								? "topic-active"
								: ""
						}`}
					>
						<div className='sidebar-icons'>
							{location.pathname ===
							"/modules/topic/prewatchvideos" ? (
								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9 1.6875C4.96793 1.6875 1.6875 4.96793 1.6875 9C1.6875 13.0321 4.96793 16.3125 9 16.3125C13.0321 16.3125 16.3125 13.0321 16.3125 9C16.3125 4.96793 13.0321 1.6875 9 1.6875ZM11.6286 9.32695L7.605 11.7577C7.54733 11.7922 7.4815 11.8108 7.41427 11.8115C7.34704 11.8122 7.28084 11.7951 7.22244 11.7617C7.16404 11.7284 7.11556 11.6802 7.08196 11.6219C7.04836 11.5637 7.03086 11.4976 7.03125 11.4304V6.56965C7.03086 6.50242 7.04836 6.43629 7.08196 6.37806C7.11556 6.31982 7.16404 6.27157 7.22244 6.23826C7.28084 6.20495 7.34704 6.18777 7.41427 6.18849C7.4815 6.1892 7.54733 6.20779 7.605 6.24234L11.6286 8.67305C11.6847 8.70722 11.7311 8.75524 11.7632 8.8125C11.7954 8.86976 11.8123 8.93433 11.8123 9C11.8123 9.06567 11.7954 9.13024 11.7632 9.1875C11.7311 9.24476 11.6847 9.29278 11.6286 9.32695Z'
										fill='url(#paint0_linear_2875_44087)'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_2875_44087'
											x1='1.6875'
											y1='7.90313'
											x2='16.3125'
											y2='7.90313'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#0096FF' />
											<stop
												offset='1'
												stopColor='#0048FF'
											/>
										</linearGradient>
									</defs>
								</svg>
							) : (
								<svg
									width='18'
									height='18'
									viewBox='0 0 30 30'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M26.25 15C26.25 8.78906 21.2109 3.75 15 3.75C8.78906 3.75 3.75 8.78906 3.75 15C3.75 21.2109 8.78906 26.25 15 26.25C21.2109 26.25 26.25 21.2109 26.25 15Z'
										stroke='#15294B'
										strokeWidth='0.8'
										strokeMiterlimit='10'
									/>
									<path
										d='M12.675 19.5965L19.3811 15.5453C19.4745 15.4883 19.5518 15.4083 19.6054 15.3129C19.659 15.2174 19.6872 15.1098 19.6872 15.0004C19.6872 14.8909 19.659 14.7833 19.6054 14.6879C19.5518 14.5924 19.4745 14.5124 19.3811 14.4554L12.675 10.4043C12.5789 10.3467 12.4692 10.3157 12.3571 10.3145C12.2451 10.3133 12.1347 10.3419 12.0374 10.3974C11.9401 10.453 11.8593 10.5334 11.8033 10.6304C11.7473 10.7275 11.7181 10.8377 11.7188 10.9498V19.051C11.7181 19.163 11.7473 19.2732 11.8033 19.3703C11.8593 19.4673 11.9401 19.5477 12.0374 19.6033C12.1347 19.6588 12.2451 19.6874 12.3571 19.6862C12.4692 19.685 12.5789 19.6541 12.675 19.5965Z'
										fill='#15294B'
									/>
								</svg>
							)}
						</div>
						<p>Pre-WATCH VIDEOS</p>
					</Link>
					<Link
						to='/modules/topic/sessionrecordings'
						className={`topic-link ${
							location.pathname ===
							"/modules/topic/sessionrecordings"
								? "topic-active"
								: ""
						}`}
					>
						<div className='sidebar-icons'>
							{location.pathname ===
							"/modules/topic/sessionrecordings" ? (
								<svg
									width='19'
									height='18'
									viewBox='0 0 19 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M17.2188 13.5137C17.0525 13.5136 16.8882 13.4804 16.7363 13.4163C16.701 13.4015 16.6673 13.3833 16.6358 13.3622L13.5664 11.3154C13.4108 11.2116 13.2838 11.0738 13.196 10.9138C13.1083 10.7537 13.0625 10.576 13.0625 10.3957V7.6043C13.0625 7.42396 13.1083 7.24627 13.196 7.08621C13.2838 6.92615 13.4108 6.78842 13.5664 6.68461L16.6358 4.63781C16.6673 4.61666 16.701 4.59853 16.7363 4.58367C16.9171 4.50752 17.1151 4.47538 17.3124 4.49016C17.5096 4.50494 17.6999 4.56618 17.8658 4.66831C18.0317 4.77044 18.168 4.91023 18.2624 5.07497C18.3568 5.23972 18.4062 5.42419 18.4062 5.61164V12.3884C18.4062 12.6867 18.2811 12.9729 18.0584 13.1839C17.8357 13.3948 17.5337 13.5134 17.2188 13.5134V13.5137ZM9.94531 14.0625H3.11719C2.44814 14.0618 1.80669 13.8098 1.33361 13.3616C0.86052 12.9134 0.594438 12.3057 0.59375 11.6719V6.32812C0.594438 5.69429 0.86052 5.08661 1.33361 4.63842C1.80669 4.19023 2.44814 3.93815 3.11719 3.9375H9.96313C10.6274 3.93824 11.2643 4.18857 11.734 4.63358C12.2037 5.07858 12.468 5.68192 12.4688 6.31125V11.6719C12.4681 12.3057 12.202 12.9134 11.7289 13.3616C11.2558 13.8098 10.6144 14.0618 9.94531 14.0625Z'
										fill='url(#paint0_linear_2875_43291)'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_2875_43291'
											x1='0.59375'
											y1='8.24063'
											x2='18.4063'
											y2='8.24063'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#0096FF' />
											<stop
												offset='1'
												stopColor='#0048FF'
											/>
										</linearGradient>
									</defs>
								</svg>
							) : (
								<svg
									width='19'
									height='18'
									viewBox='0 0 19 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M17.2188 13.5137C17.0525 13.5136 16.8882 13.4804 16.7363 13.4163C16.701 13.4015 16.6673 13.3833 16.6358 13.3622L13.5664 11.3154C13.4108 11.2116 13.2838 11.0738 13.196 10.9138C13.1083 10.7537 13.0625 10.576 13.0625 10.3957V7.6043C13.0625 7.42396 13.1083 7.24627 13.196 7.08621C13.2838 6.92615 13.4108 6.78842 13.5664 6.68461L16.6358 4.63781C16.6673 4.61666 16.701 4.59853 16.7363 4.58367C16.9171 4.50752 17.1151 4.47538 17.3124 4.49016C17.5096 4.50494 17.6999 4.56618 17.8658 4.66831C18.0317 4.77044 18.168 4.91023 18.2624 5.07497C18.3568 5.23972 18.4062 5.42419 18.4062 5.61164V12.3884C18.4062 12.6867 18.2811 12.9729 18.0584 13.1839C17.8357 13.3948 17.5337 13.5134 17.2188 13.5134V13.5137ZM9.94531 14.0625H3.11719C2.44814 14.0618 1.80669 13.8098 1.33361 13.3616C0.86052 12.9134 0.594438 12.3057 0.59375 11.6719V6.32812C0.594438 5.69429 0.86052 5.08661 1.33361 4.63842C1.80669 4.19023 2.44814 3.93815 3.11719 3.9375H9.96313C10.6274 3.93824 11.2643 4.18857 11.734 4.63358C12.2037 5.07858 12.468 5.68192 12.4688 6.31125V11.6719C12.4681 12.3057 12.202 12.9134 11.7289 13.3616C11.2558 13.8098 10.6144 14.0618 9.94531 14.0625Z'
										fill='url(#paint0_linear_2875_43291)'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_2875_43291'
											x1='0.59375'
											y1='8.24063'
											x2='18.4063'
											y2='8.24063'
											gradientUnits='userSpaceOnUse'
										>
											<stop offset='1' />
										</linearGradient>
									</defs>
								</svg>
							)}
						</div>
						<p>SESSION RECORDINGS</p>
					</Link>
					<Link
						to='/modules/topic/references'
						className={`topic-link ${
							location.pathname === "/modules/topic/references"
								? "topic-active"
								: ""
						}`}
					>
						<div className='sidebar-icons'>
							{location.pathname ===
							"/modules/topic/references" ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='18'
									height='18'
									viewBox='0 0 256 256'
								>
									<g
										id='galaFileDocument0'
										fill='none'
										stroke='#0096ff'
										strokeDasharray='none'
										strokeLinecap='round'
										strokeMiterlimit='4'
										strokeOpacity='1'
									>
										<path
											id='galaFileDocument1'
											strokeLinejoin='miter'
											strokeWidth='15.992'
											d='M 32,48 V 207.9236'
										/>
										<path
											id='galaFileDocument2'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='M 224,96 V 208'
										/>
										<path
											id='galaFileDocument3'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='m 64,16 h 80'
										/>
										<path
											id='galaFileDocument4'
											strokeLinejoin='miter'
											strokeWidth='15.992'
											d='M 64,240 H 192'
										/>
										<path
											id='galaFileDocument5'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='m 224,208 c 0.0874,15.98169 -16,32 -32,32'
										/>
										<path
											id='galaFileDocument6'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='m -32,208 c -10e-7,16 -16,32 -32,32'
											transform='scale(-1 1)'
										/>
										<path
											id='galaFileDocument7'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='M -32,-47.976784 C -32,-32 -48,-16.356322 -63.999997,-16.000002'
											transform='scale(-1)'
										/>
										<path
											id='galaFileDocument8'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='M 223.91257,96.071779 144,16'
										/>
										<path
											id='galaFileDocument9'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='m -144,64 c -0.0492,15.912926 -16.06452,31.999995 -32,32'
											transform='scale(-1 1)'
										/>
										<path
											id='galaFileDocumenta'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='M 144,64 V 16'
										/>
										<path
											id='galaFileDocumentb'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='m 176,96 h 48'
										/>
									</g>
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='18'
									height='18'
									viewBox='0 0 256 256'
								>
									<g
										id='galaFileDocument0'
										fill='black'
										stroke='black'
										strokeLinecap='round'
										strokeMiterlimit='4'
										strokeOpacity='1'
									>
										<path
											id='galaFileDocument1'
											strokeLinejoin='miter'
											strokeWidth='15.992'
											d='M 32,48 V 207.9236'
										/>
										<path
											id='galaFileDocument2'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='M 224,96 V 208'
										/>
										<path
											id='galaFileDocument3'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='m 64,16 h 80'
										/>
										<path
											id='galaFileDocument4'
											strokeLinejoin='miter'
											strokeWidth='15.992'
											d='M 64,240 H 192'
										/>
										<path
											id='galaFileDocument5'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='m 224,208 c 0.0874,15.98169 -16,32 -32,32'
										/>
										<path
											id='galaFileDocument6'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='m -32,208 c -10e-7,16 -16,32 -32,32'
											transform='scale(-1 1)'
										/>
										<path
											id='galaFileDocument7'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='M -32,-47.976784 C -32,-32 -48,-16.356322 -63.999997,-16.000002'
											transform='scale(-1)'
										/>
										<path
											id='galaFileDocument8'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='M 223.91257,96.071779 144,16'
										/>
										<path
											id='galaFileDocument9'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='m -144,64 c -0.0492,15.912926 -16.06452,31.999995 -32,32'
											transform='scale(-1 1)'
										/>
										<path
											id='galaFileDocumenta'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='M 144,64 V 16'
										/>
										<path
											id='galaFileDocumentb'
											strokeLinejoin='round'
											strokeWidth='15.992'
											d='m 176,96 h 48'
										/>
									</g>
								</svg>
							)}
						</div>
						<p>REFERENCES</p>
					</Link>
				</div>
				<div className='topic-outlet'>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Topic;
