import React from "react";
import "../../public/styling/hero.css";
import NavBar from "./NavBar";

const Hero = () => {
	return (
		<>
			<div className="heroSection">
				<NavBar />
				<div className="heroContainer">
					<div className="heroLeft">
						<h1 className="heroTitle">Jordan Lowe</h1>
						<div className="heroWhatIDo">
							<img
								className="heroLine"
								src="../public/Images/line.png"
								alt="line"
							></img>
							<h2 className="heroSubtitle">Think</h2>
						</div>
						<p className="heroDescription">Make Websites</p>
						<button className="heroButton">Learn More</button>
					</div>
					<div className="heroRight">
						<img
							className="heroImage"
							src="../public/Images/moon.png"
							alt="moon image"
						></img>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
