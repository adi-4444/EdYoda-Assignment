import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dropdown from "./components/Dropdown/Dropdown";
import SideNav from "./components/Sidenav/SideNav";
import Content from "./components/main/Content";

function App() {
	const [dropDown, setDropdown] = useState(false);
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
