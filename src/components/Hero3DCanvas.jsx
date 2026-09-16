import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DeveloperOrb() {
  const meshRef = useRef();
  const innerMeshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      meshRef.current.rotation.x +=
        (state.pointer.y * 0.2 - meshRef.current.rotation.x) * 0.05;

      meshRef.current.rotation.y +=
        (state.pointer.x * 0.2 - meshRef.current.rotation.y) * 0.05;
    }

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x -= delta * 0.4;
      innerMeshRef.current.rotation.y -= delta * 0.5;
    }
  });

  return (
    <group>
      {/* Outer Wireframe Tech Sphere */}
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 2]} />

        <meshStandardMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.35}
          emissive="#0284c7"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={innerMeshRef} scale={1.2}>
          <octahedronGeometry args={[1, 0]} />

          <MeshWobbleMaterial
            color="#818cf8"
            factor={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            emissive="#4f46e5"
            emissiveIntensity={0.8}
          />
        </mesh>
      </Float>

      {/* Surrounding Tech Nodes */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 3.2;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <Float
            key={i}
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={1}
          >
            <mesh
              position={[
                x,
                y,
                i % 2 === 0 ? 0.8 : -0.8
              ]}
              scale={0.25}
            >
              <boxGeometry args={[1, 1, 1]} />

              <meshStandardMaterial
                color={i % 2 === 0 ? '#38bdf8' : '#818cf8'}
                wireframe
                emissive={i % 2 === 0 ? '#0284c7' : '#4f46e5'}
                emissiveIntensity={1}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

function ParticleField({ count = 120 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color('#38bdf8');
    const color2 = new THREE.Color('#818cf8');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const mixed = Math.random() > 0.5 ? color1 : color2;

      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-[420px] md:h-[550px] relative flex items-center justify-center">

      {/* R3F Canvas - NO BLUR */}
      <Canvas
        camera={{
          position: [0, 0, 7.5],
          fov: 45
        }}
        gl={{
          antialias: true,
          alpha: true
        }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.7} />

        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
        />

        <pointLight
          position={[-10, -10, -5]}
          intensity={0.8}
          color="#818cf8"
        />

        <DeveloperOrb />

        <ParticleField count={150} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>

      {/* Overlay Developer Terminal Badge */}
      <div className="absolute bottom-4 right-4 glass-panel px-3 py-1.5 rounded-lg text-[11px] font-mono text-slate-300 flex items-center gap-2 border border-white/10 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />

        <span>
          3D Canvas Active • R3F / WebGL
        </span>
      </div>
    </div>
  );
}