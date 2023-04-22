import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Dropdown from "./components/Dropdown/Dropdown";
import SideNav from "./components/Sidenav/SideNav";
import Content from "./components/main/Content";

function App() {
	const [dropDown, setDropdown] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/home");
		}
	}, [location]);
	return (
		<div className='app'>
			<Header />
			<Dropdown dropDown={dropDown} setDropdown={setDropdown} />
			<div className='main'>
				<SideNav />
				<Content />
			</div>
			<div className='messagebox'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='30'
					height='30'
					viewBox='0 0 24 24'
				>
					<path
						fill='#e0e6f2'
						d='M17 12V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1m4-6h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1Z'
					/>
				</svg>
			</div>
		</div>
	);
}

export default App;
