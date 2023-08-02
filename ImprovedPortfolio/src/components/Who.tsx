import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

import "../../public/styling/who.css";

const Who = () => {
	return (
		<>
			<div className="whoSection">
				<div className="whoContainer">
					<div className="whoLeft">
						<Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
							<OrbitControls enableZoom={false} autoRotate/>
							<ambientLight intensity={1} />
							<directionalLight position={[3, 2, 1]} />
							<Cube />
						</Canvas>
					</div>
					<div className="whoRight">
						<h1 className="whoTitle">About My Work</h1>
						<div className="whoWhatIDo">
							<img
								className="whoLine"
								src="../public/Images/line.png"
								alt="line"
							></img>
							<h2 className="whoSubtitle">Technical Skills</h2>
						</div>
						<ul className="whoList">
							<li className="whoDescription">Typescript/Javascript</li>
							<li className="whoDescription">React</li>
							<li className="whoDescription">HTML/CSS</li>
							<li className="whoDescription">SQL</li>
							<li className="whoDescription">React Queries & Redux</li>
							<li className="whoDescription">Github</li>
							<li className="whoDescription">Vitest & Jest</li>
							<li className="whoDescription">Python</li>
						</ul>
						<button className="whoButton">See Projects</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Who;
