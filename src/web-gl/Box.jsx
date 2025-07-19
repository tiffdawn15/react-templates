import React from "react";
import { Canvas } from "@react-three/fiber";

function Box() {
    return (
      <mesh rotation={[10, 10, 0]}>
        {/* Box geometry */}
        <boxGeometry args={[1, 1, 1]} />
        {/* Material */}
        <meshStandardMaterial color="orange" />
      </mesh>
    );
  }
  

  function Example() {
    return (
      <Canvas style={{ height: "100vh" }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* 3D Object */}
        <Box />
      </Canvas>
    );
  }
  
  export default Example;