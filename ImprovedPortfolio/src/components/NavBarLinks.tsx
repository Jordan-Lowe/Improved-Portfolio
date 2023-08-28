import React from "react";
import "../../public/styling/navBarLinks.css";

const CV_Logo = "../../public/Images/curriculum-vitae-resume-svgrepo-com.svg";
const GITHUB_LOGO = "../../public/Images/github-mark-white.svg";
const Linkdein_Logo = "../../public/Images/linkedin-icon-2.svg";

function NavBarLinks() {
	return (
		<ul className="navBarImg">
			<li className="navImgList">
				<a
					href="https://github.com/Jordan-Lowe"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="githubLogo" src={GITHUB_LOGO} alt="Github logo"/>
				</a>
			</li>
			<li className="navImgList">
				<a
					href="https://www.linkedin.com/in/jordanlowe5/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="navImages" src={Linkdein_Logo} alt="Linkedin logo" />
				</a>
			</li>

			<li className="navImgList">
				<a
					href="../../public/Pdf/Jordan Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="navImages" src={CV_Logo} alt="CV logo" />
				</a>
			</li>
		</ul>
	);
}

export default NavBarLinks;
