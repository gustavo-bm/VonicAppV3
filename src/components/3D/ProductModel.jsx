import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

// Mock de geometrias para diferentes tipos de produtos
const ProductGeometry = ({ type }) => {
  switch (type) {
    case 'nozzle':
      return (
        <mesh>
          <cylinderGeometry args={[0.5, 0.3, 2, 32]} />
          <meshStandardMaterial color="#CE171F" metalness={0.8} roughness={0.2} />
        </mesh>
      );
    case 'manifold':
      return (
        <group>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3, 0.5, 1]} />
            <meshStandardMaterial color="#CE171F" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.5, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 1, 32]} rotation={[Math.PI / 2, 0, 0]} />
            <meshStandardMaterial color="#CE171F" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      );
    case 'filter':
      return (
        <mesh>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial color="#CE171F" metalness={0.8} roughness={0.2} />
        </mesh>
      );
    default:
      return (
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#CE171F" metalness={0.8} roughness={0.2} />
        </mesh>
      );
  }
};

const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#CE171F] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ProductModel = ({ type = 'default', className = "w-full h-[400px]" }) => {
  const [isCanvasReady, setCanvasReady] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence>
        {!isCanvasReady && <LoadingSpinner />}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isCanvasReady ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <Canvas
          shadows
          dpr={[1, 2]}
          style={{ background: 'transparent' }}
          onCreated={() => setTimeout(() => setCanvasReady(true), 500)}
        >
          <PerspectiveCamera
            makeDefault
            position={[3, 2, 3]}
            fov={45}
            near={0.1}
            far={100}
          />
          <Environment preset="studio" />

          <ambientLight intensity={0.2} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <spotLight
            position={[0, 5, 0]}
            intensity={0.8}
            angle={0.6}
            penumbra={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <Suspense fallback={null}>
            <ProductGeometry type={type} />
          </Suspense>

          <OrbitControls
            minDistance={2}
            maxDistance={10}
            enableZoom
            autoRotate
            autoRotateSpeed={2}
            enablePan={false}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </motion.div>
    </div>
  );
};

export default ProductModel; 