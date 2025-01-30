import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const HotRunnerModel = () => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={meshRef}>
      {/* Base do bico */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial 
          color="#808080"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Ponta do bico */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.3, 0.1, 0.4, 32]} />
        <meshStandardMaterial 
          color="#606060"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Resistência */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[0.6, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color="#CE171F"
          metalness={0.5}
          roughness={0.3}
          emissive="#CE171F"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
};

const HotRunnerScene = () => {
  return (
    <div className="h-[600px] w-full bg-gradient-to-b from-gray-900 to-black">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[0, 5, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />

        <HotRunnerModel />
      </Canvas>
    </div>
  );
};

export default HotRunnerScene; 