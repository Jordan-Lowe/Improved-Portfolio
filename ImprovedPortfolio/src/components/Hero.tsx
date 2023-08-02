import React from "react";
import "../../public/styling/hero.css";
import NavBar from "./NavBar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

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
						<Canvas>
							<OrbitControls enableZoom={false} />
							<ambientLight intensity={1} />
							<directionalLight position={[3, 2, 1]} />
							<Sphere args={[1, 100, 200]} scale={2.4}>
								<MeshDistortMaterial
									color="#5787f7"
									attach="material"
									distort={0.5}
									speed={2}
								/>
							</Sphere>
						</Canvas>
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
