import React from "react";
import "./Header.css";
import avatar from "../../assets/avatar.png";

const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>EDYODA</div>
			<div className='user-data'>
				<span>Hi, Test Learner !</span>
				<img src={avatar} alt='avatar' height={40} />
			</div>
		</div>
	);
};

export default Header;
