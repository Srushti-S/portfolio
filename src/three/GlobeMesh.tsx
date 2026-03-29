import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WarmSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.12;
      meshRef.current.rotation.x = Math.sin(t * 0.07) * 0.15;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.12;
      wireRef.current.rotation.x = Math.sin(t * 0.07) * 0.15;
    }
  });

  return (
    <>
      {/* Outer wireframe */}
      <mesh ref={wireRef} scale={1.01}>
        <icosahedronGeometry args={[1.6, 4]} />
        <meshBasicMaterial color="#2a2520" wireframe />
      </mesh>

      {/* Inner solid with warm gradient-like material */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.55, 4]} />
        <meshStandardMaterial
          color="#1a1713"
          roughness={0.9}
          metalness={0.05}
          emissive="#c8a97e"
          emissiveIntensity={0.04}
        />
      </mesh>

      {/* Rim light */}
      <pointLight position={[4, 3, 2]} intensity={1.2} color="#c8a97e" />
      <pointLight position={[-3, -2, -2]} intensity={0.4} color="#ffffff" />
      <ambientLight intensity={0.15} />
    </>
  );
}

export default function GlobeMesh() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <WarmSphere />
      </Canvas>
    </div>
  );
}
