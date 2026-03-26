import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// ── Inner particle mesh ─────────────────────────────────────────────────────
function ParticleMesh() {
  const meshRef = useRef<THREE.Points>(null!)
  const count = 600

  // Generate random positions + random speeds per particle
  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const speeds    = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20  // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20  // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8   // z
      speeds[i]            = 0.002 + Math.random() * 0.004
    }
    return { positions, speeds }
  }, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      // Float each particle upward slowly, reset when it exits top
      posArray[i * 3 + 1] += speeds[i]
      if (posArray[i * 3 + 1] > 10) {
        posArray[i * 3 + 1] = -10
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true

    // Gentle overall rotation
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.015
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.008) * 0.08
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#c8a96e"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </points>
  )
}

// ── Public component ────────────────────────────────────────────────────────
export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ParticleMesh />
      </Canvas>
    </div>
  )
}
