import React from "react";
import "../../public/styling/navBar.css";
function NavBar() {
	return (
		<>
			<div className="navBarSection">
				<div className="navBarContainer">
					<div className="navLinks">
						<div>
							<img
								className="navLogo"
								src="../public/Images/logo.png"
								alt="Logo_Img"
							></img>
						</div>
						<ul className="navUl">
							<li className="navList">Home</li>
							<li className="navList">Who</li>
							<li className="navList">Works</li>
							<li className="navList">Contact Me</li>
						</ul>
					</div>
					<div className="navIcons">
						<div>
							<img
								className="navSearch"
								src="../public/Images/search.png"
								alt="Search Icon"
							></img>
							<button className="navButton">Hire Now</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
