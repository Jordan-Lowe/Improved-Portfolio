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
