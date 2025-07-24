import React from "react";
import { Canvas } from "@react-three/fiber";
import useOnlineStatus from "../hooks";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "online" : "disconnected"}</h1>;
}

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
// THIS is the way to connect to WEbGL with react-three/fiber

function ReactThreeFiberExample() {
  return (
    <>
     
      <Canvas style={{ height: "100vh" }}>w/
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* 3D Object */}
        <Box />
      </Canvas>
    </>
  );
}

// You can also do it with plain WebGL
function WebGLExample() {
  return (
    <>
  
  <StatusBar></StatusBar>
    <canvas
      id="webGl"
      width={400}
      height={1000}
      style={{ border: "1px solid black" }}
    ></canvas>

</>
  );
}

export { WebGLExample, ReactThreeFiberExample };
