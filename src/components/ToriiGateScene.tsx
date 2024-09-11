import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import trophy from "../assets/img/trophy.png"

const ToriiGate = () => {
  // Load the Torii gate texture (the image)
  const texture = useTexture(trophy);  // Update with your image path

  return (
    <mesh>
      <planeGeometry args={[5, 7]} />  {/* Adjust dimensions based on your image's aspect ratio */}
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const ToriiGateScene = () => {
  return (
    <Canvas className='h-screen w-full'>
      {/* Suspense for asynchronous loading */}
      <Suspense fallback={null}>
        {/* Adding orbit controls for easy rotation and zoom */}
        <OrbitControls />
        {/* Adding a basic ambient light */}
        <ambientLight intensity={0.5} />
        {/* Adding a directional light */}
        <directionalLight position={[5, 5, 5]} intensity={1} />
        {/* Render the Torii Gate */}
        <ToriiGate />
      </Suspense>
    </Canvas>
  );
};

export default ToriiGateScene;
