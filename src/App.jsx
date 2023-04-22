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
		</div>
	);
}

export default App;
