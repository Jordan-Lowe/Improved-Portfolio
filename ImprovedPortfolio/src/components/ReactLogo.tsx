

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ReactLogo(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF(
		"../../public/Images/react-transformed.glb"
	);
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes["React-Logo_Material002_0"].geometry}
				material={materials["Material.002"]}
				position={[0, 0.079, 0.181]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={[0.392, 0.392, 0.527]}
			/>
		</group>
	);
}

useGLTF.preload("/react-transformed.glb");
