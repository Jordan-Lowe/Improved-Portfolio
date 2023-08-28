import React from "react";
import "../../public/styling/navBar.css";
import NavBarLinks from "./NavBarLinks";
function NavBar() {
	return (
		<>
			<div className="navBarSection">
				<div className="navBarContainer">
					<div className="navLinks">
						<div>
							<img
								className="navLogo"
								src="../public/Images/jordan-lowe-logo.png"
								alt="Logo_Img"
							></img>
						</div>
						<ul className="navUl">
							<li className="navList">Home</li>
							<li className="navList">Who</li>
							<li className="navList">Works</li>
							<li className="navList">Contact Me</li>
							<NavBarLinks />
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
