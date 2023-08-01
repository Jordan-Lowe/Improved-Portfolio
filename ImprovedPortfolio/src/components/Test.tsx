import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import React from "react";

const Test = () => {
    <div className="testSection">
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]} />
            <mesh>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color='red'>
                    
                </meshStandardMaterial>
            </mesh>
        </Canvas>
    </div>
}

export default Test