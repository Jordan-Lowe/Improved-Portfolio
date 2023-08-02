import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactLogo from "./ReactLogo";
import React from "react";

import '../../public/styling/webDesign.css'

const WebDesign = () => {
	return (
		<>
			<Canvas>
				<Stage environment={"city"} intensity={0.6} >
					<ReactLogo />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={4}/>
			</Canvas>
			<p className="webDesDescription">Hi</p>
		</>
	);
};

export default WebDesign;
