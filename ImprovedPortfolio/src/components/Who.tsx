import React from "react";
import "../../public/styling/who.css";

const Who = () => {
	return (
		<>
			<div className="whoSection">
				<div className="whoContainer">
					<div className="whoLeft">
						{/* <img
							className="whoImage"
							src="../public/Images/moon.png"
							alt="moon image"
						></img> */}
					</div>
					<div className="whoRight">
						<h1 className="whoTitle">Think of Who</h1>
						<div className="whoWhatIDo">
							<img
								className="whoLine"
								src="../public/Images/line.png"
								alt="line"
							></img>
							<h2 className="whoSubtitle">Who I am</h2>
						</div>
						<p className="whoDescription">Ball</p>
						<button className="whoButton">See Projects</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Who;
