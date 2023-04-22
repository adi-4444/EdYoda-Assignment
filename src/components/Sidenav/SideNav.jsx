import React from "react";
import "./SideNav.css";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
	const { pathname } = useLocation();
	return (
		<div className='sidenav'>
			<Link
				to='/home'
				className={` link ${
					pathname === "/home" || pathname === "/home/"
						? "active"
						: ""
				}`}
			>
				<svg
					version='1.0'
					xmlns='http://www.w3.org/2000/svg'
					width='70'
					height='70'
					viewBox='0 0 1280 600'
				>
					<g
						fill='currentColor'
						transform='translate(0.000000,720.000000) scale(0.100000,-0.100000)'
						stroke='none'
					>
						<path
							d='M6250 6449 c-122 -87 -203 -145 -345 -244 -38 -27 -115 -81 -170
-120 -161 -115 -1335 -945 -1395 -987 -30 -21 -86 -60 -125 -88 -38 -28 -108
-77 -155 -110 -47 -33 -119 -83 -160 -113 -41 -29 -106 -75 -145 -102 -245
-171 -454 -321 -478 -344 -15 -14 -42 -48 -60 -76 -31 -48 -32 -53 -32 -155 0
-71 5 -113 14 -130 36 -63 160 -226 195 -256 51 -44 133 -74 200 -74 64 0 30
-22 611 390 220 156 508 360 640 453 344 244 450 319 535 379 118 82 240 168
301 213 31 22 87 62 125 88 38 27 128 90 199 140 72 51 190 134 262 186 l133
93 63 -44 c162 -110 225 -154 263 -182 22 -17 103 -75 180 -129 76 -54 400
-282 719 -508 319 -225 674 -476 788 -557 115 -81 234 -165 265 -188 31 -22
104 -73 162 -114 58 -41 141 -100 185 -131 110 -79 132 -89 195 -89 40 0 71 8
115 29 67 32 107 71 187 181 99 137 98 135 98 252 0 98 -2 107 -29 149 -42 65
-87 103 -281 239 -431 303 -588 416 -628 454 -51 48 -112 147 -144 231 -22 59
-22 73 -28 590 -5 489 -6 533 -24 567 -32 66 -93 125 -164 160 l-66 33 -182 3
c-144 3 -193 0 -237 -13 -107 -31 -190 -106 -228 -205 -16 -43 -19 -78 -19
-240 0 -196 -7 -238 -43 -269 -27 -22 -80 -5 -165 53 -42 29 -275 193 -517
365 -309 219 -447 311 -465 310 -15 0 -75 -36 -150 -90z'
						/>
						<path
							d='M6287 5118 c-141 -97 -151 -104 -452 -317 -143 -102 -390 -277 -550
-390 -159 -112 -351 -248 -425 -300 -74 -53 -153 -108 -175 -123 -22 -15 -70
-49 -106 -75 -37 -27 -107 -76 -157 -111 -49 -34 -102 -74 -116 -87 l-26 -24
0 -1243 c0 -819 4 -1265 11 -1308 16 -99 69 -199 150 -285 80 -84 139 -125
240 -166 l71 -29 542 0 c408 0 545 3 554 12 9 9 12 182 12 718 0 388 4 711 8
718 7 10 121 12 538 10 l529 -3 3 -714 c1 -507 5 -718 13 -728 9 -11 112 -13
554 -13 l543 0 70 29 c141 57 220 117 299 228 24 34 56 90 71 125 l27 63 3
1297 2 1296 -41 34 c-23 18 -59 44 -80 58 -20 14 -72 50 -116 81 -43 30 -118
84 -168 119 -49 35 -122 87 -161 114 -40 28 -123 87 -185 130 -63 44 -359 254
-659 466 -664 470 -673 477 -698 484 -14 5 -49 -14 -125 -66z'
						/>
					</g>
				</svg>
				<p className='nav-titles'>Home</p>
			</Link>
			<Link
				to='/modules'
				className={` link ${
					pathname === "/modules/topic" ||
					pathname === "/modules/quiz" ||
					pathname === "/modules/assignment" ||
					pathname === "/modules/topic/sessionplan" ||
					pathname === "/modules/topic/prewatchvideos" ||
					pathname === "/modules/topic/sessionrecordings" ||
					pathname === "/modules/topic/references"
						? "active"
						: ""
				}`}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='40'
					height='40'
					viewBox='0 0 14 14'
				>
					<g
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.2'
					>
						<rect width='3.5' height='13' x='.55' y='.5' rx='.5' />

						<rect
							width='3.5'
							height='11'
							x='4.05'
							y='2.5'
							rx='.5'
						/>
						<rect
							width='3'
							height='11'
							x='9.26'
							y='2.3'
							rx='.5'
							transform='rotate(-14.05 10.779 7.795)'
						/>
						<path d='M.55 10h3.5m0-1h3.5m2.5 2l2.88-.72' />
					</g>
				</svg>
				<p className='nav-titles'>MODULES</p>
			</Link>
			<Link
				to='/instructors'
				className={` link ${
					location.pathname === "/instructors" ? "active" : ""
				}`}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='40'
					height='40'
					viewBox='0 0 24 24'
				>
					<path
						fill='currentColor'
						d='M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9V20Z'
					/>
				</svg>
				<p className='nav-titles'>INSTRUCTORS</p>
			</Link>
		</div>
	);
};

export default SideNav;
