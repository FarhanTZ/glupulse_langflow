import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, OrbitControls, Ring } from '@react-three/drei';
import * as THREE from 'three';

// Particle Cloud Component
const ParticleField = ({ count = 200 }) => {
  const points = useRef<THREE.Points>(null!);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 2.5;
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360);

      positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(theta);
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (points.current) {
      points.current.rotation.y = time * 0.05;
      points.current.rotation.x = time * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#22d3ee"
        sizeAttenuation={true}
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Orbiting Bio-Ring Component
const OrbitRing = ({ radius, speed, color, tilt }: { radius: number; speed: number; color: string; tilt: [number, number, number] }) => {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.z = time * speed;
    }
  });

  return (
    <group ref={ref} rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.015, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </group>
  );
};

// Core Glowing Bio-Pulsar
const BioPulseCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerMeshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Simulate heart rate pulse
    const pulse = 1 + Math.sin(time * 3) * 0.06;
    if (meshRef.current) {
      meshRef.current.scale.set(pulse, pulse, pulse);
    }
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.y = time * 0.15;
      outerMeshRef.current.rotation.x = time * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      {/* Inner Distorted Pulsing Core */}
      <Sphere ref={meshRef} args={[1.1, 64, 64]}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.15}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </Sphere>

      {/* Outer Wireframe Cage / Geometric Shield */}
      <Sphere ref={outerMeshRef} args={[1.5, 20, 20]}>
        <meshStandardMaterial
          color="#14b8a6"
          wireframe
          transparent
          opacity={0.3}
          roughness={0.3}
        />
      </Sphere>

      {/* Orbit Rings */}
      <OrbitRing radius={1.9} speed={0.4} color="#38bdf8" tilt={[Math.PI / 4, 0, 0]} />
      <OrbitRing radius={2.2} speed={-0.3} color="#06b6d4" tilt={[-Math.PI / 3, Math.PI / 6, 0]} />
      <OrbitRing radius={2.5} speed={0.2} color="#2dd4bf" tilt={[Math.PI / 6, -Math.PI / 4, 0]} />

      {/* Floating Surrounding Particles */}
      <ParticleField count={180} />
    </Float>
  );
};

export const PulseCore3D: React.FC = () => {
  return (
    <div className="w-full h-[380px] sm:h-[480px] relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#22d3ee" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#14b8a6" />
        <directionalLight position={[0, 5, 5]} intensity={1.2} color="#ffffff" />
        
        <BioPulseCore />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* 3D Overlay Badge */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-[11px] text-cyan-300 pointer-events-none flex items-center gap-1.5 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
        <span>Interactive 3D Pulse Core • Putar dengan mouse</span>
      </div>
    </div>
  );
};
