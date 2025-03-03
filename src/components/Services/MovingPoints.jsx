import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const MovingPoints = () => {
  const groupRef = useRef();
  const lineGeometryRef = useRef();
  const { mouse } = useThree();

  // Gerar pontos aleatórios
  const points = useMemo(() => {
    const count = 40;
    const range = 5;
    return new Array(count).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * range * 2,
        (Math.random() - 0.5) * range * 2,
        (Math.random() - 0.5) * range * 2
      ],
      velocity: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ]
    }));
  }, []);

  // Atualiza as conexões dinamicamente
  const updateLines = () => {
    const threshold = 2.5;
    const lineSegments = [];

    points.forEach((p1, i) => {
      points.forEach((p2, j) => {
        if (i !== j) {
          const dist = new THREE.Vector3(...p1.position).distanceTo(new THREE.Vector3(...p2.position));
          if (dist < threshold) {
            lineSegments.push(...p1.position, ...p2.position);
          }
        }
      });
    });

    return new Float32Array(lineSegments);
  };

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((point, i) => {
        const p = points[i];

        // Atualizar posições
        p.position[0] += p.velocity[0];
        p.position[1] += p.velocity[1];
        p.position[2] += p.velocity[2];

        // Reagir ao mouse
        const mousePos = new THREE.Vector3(mouse.x * 5, mouse.y * 5, 0);
        const pointPos = new THREE.Vector3(...p.position);
        const distance = mousePos.distanceTo(pointPos);

        if (distance < 2) {
          p.velocity[0] += (Math.random() - 0.5) * 0.05;
          p.velocity[1] += (Math.random() - 0.5) * 0.05;
        }

        point.position.set(...p.position);
      });

      // Atualiza linhas dinamicamente
      if (lineGeometryRef.current) {
        const newLines = updateLines();
        lineGeometryRef.current.setAttribute("position", new THREE.Float32BufferAttribute(newLines, 3));
        lineGeometryRef.current.computeBoundingSphere();
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Pontos */}
      {points.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}

      {/* Linhas */}
      <lineSegments>
        <bufferGeometry ref={lineGeometryRef} />
        <lineBasicMaterial color="white" transparent opacity={0.5} />
      </lineSegments>
    </group>
  );
};

const Scene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{
          position: [0, 0, 20],
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          alpha: true
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 15, 25]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 10]} intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.2} color="#CE171F" />
        <pointLight position={[-10, -10, -10]} intensity={0.2} color="#CE171F" />
        <MovingPoints />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default Scene;