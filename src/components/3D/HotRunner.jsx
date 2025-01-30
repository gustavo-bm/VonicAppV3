import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

function Model() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scene } = useGLTF('/bico19vonic.glb');

  React.useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.metalness = 0.8;
            child.material.roughness = 0.2;
          }
        }
      });
      // Pequeno delay para garantir que o modelo esteja pronto
      setTimeout(() => setIsLoaded(true), 100);
    }
  }, [scene]);

  if (!isLoaded) return null;

  return (
    <primitive
      object={scene}
      scale={0.05}
      position={[0, -0.2, 0]}
      rotation={[Math.PI, Math.PI / 4, 0]}
    />
  );
}

const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#CE171F] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const HotRunner = () => {
  const [isCanvasReady, setCanvasReady] = useState(false);

  return (
    <div className="w-full h-[600px] relative">
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
            position={[8, 5, 8]}
            fov={30}
            near={0.1}
            far={100}
          />
          <Environment preset="studio" />

          <ambientLight intensity={0.2} />
          <directionalLight
            position={[3, 3, 3]}
            intensity={0.8}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <spotLight
            position={[0, 3, 0]}
            intensity={0.6}
            angle={0.6}
            penumbra={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <Suspense fallback={null}>
            <Model />
          </Suspense>

          <OrbitControls
            minDistance={3}
            maxDistance={15}
            enableZoom
            autoRotate
            autoRotateSpeed={1.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            enablePan={false}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </motion.div>
    </div>
  );
};

useGLTF.preload('/bico19vonic.glb');

export default HotRunner;
