import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 1. Procedural 3D Heart Shape Geometry
function createHeartGeometry() {
  const x = 0, y = 0;
  const heartShape = new THREE.Shape();

  heartShape.moveTo(x + 0.25, y + 0.25);
  heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y);
  heartShape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35);
  heartShape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.1, y + 0.77, x + 0.25, y + 1.0);
  heartShape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
  heartShape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);
  heartShape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);

  const extrudeSettings = {
    depth: 0.38,
    bevelEnabled: true,
    bevelSegments: 20,
    steps: 2,
    bevelSize: 0.2,
    bevelThickness: 0.2,
  };

  const geom = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  geom.center();
  return geom;
}

// 2. Glowing Particle Field (Vascular / Blood Cells Dust)
const HeartParticleCloud = ({ count = 280 }) => {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c1 = new THREE.Color('#e11d48'); // Crimson Rose
    const c2 = new THREE.Color('#be123c'); // Deep Ruby
    const c3 = new THREE.Color('#fb7185'); // Soft Rose Coral

    for (let i = 0; i < count; i++) {
      const radius = 1.6 + Math.random() * 2.8;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      pos[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(theta);

      const mixed = Math.random() > 0.5 ? c1 : Math.random() > 0.5 ? c2 : c3;
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.035;
      pointsRef.current.rotation.x = time * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.7}
      />
    </points>
  );
};

// 3. Main 3D Pulsing Heart Component in Crimson Ruby Red
const AnimatedHeart = () => {
  const heartMeshRef = useRef<THREE.Mesh>(null!);
  const wireframeMeshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  const heartGeo = useMemo(() => createHeartGeometry(), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Natural cardiac heartbeat pulse formula
    const beat1 = Math.pow(Math.sin(time * 3.5), 16) * 0.1;
    const beat2 = Math.pow(Math.sin(time * 3.5 + 0.35), 24) * 0.05;
    
    const scale = 2.05 + beat1 + beat2;

    if (groupRef.current) {
      groupRef.current.scale.set(scale, scale, scale);
      groupRef.current.rotation.y = Math.sin(time * 0.4) * 0.25;
    }

    if (wireframeMeshRef.current) {
      wireframeMeshRef.current.rotation.z = time * 0.08;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.65}>
      <group ref={groupRef} position={[0, -0.15, 0]} rotation={[Math.PI, 0, 0]}>
        
        {/* Core Heart Mesh with Vivid Ruby Red Shader */}
        <mesh ref={heartMeshRef} geometry={heartGeo}>
          <MeshDistortMaterial
            color="#e11d48"
            emissive="#9f1239"
            emissiveIntensity={0.55}
            distort={0.14}
            speed={2}
            roughness={0.15}
            metalness={0.65}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Outer Vascular Wireframe Shield */}
        <mesh ref={wireframeMeshRef} geometry={heartGeo} scale={1.06}>
          <meshStandardMaterial
            color="#f43f5e"
            wireframe
            transparent
            opacity={0.3}
            emissive="#fb7185"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>

      {/* Floating Blood / Glucose Dust Particles */}
      <HeartParticleCloud count={280} />
    </Float>
  );
};

export const HeartPulse3D: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing z-0">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        
        {/* Warm Crimson & Rose Point Lights */}
        <pointLight position={[10, 10, 10]} intensity={3.5} color="#fb7185" />
        <pointLight position={[-10, -10, -10]} intensity={2.5} color="#e11d48" />
        <pointLight position={[0, -5, 5]} intensity={2} color="#f43f5e" />
        <directionalLight position={[0, 8, 6]} intensity={1.8} color="#fff1f2" />

        <AnimatedHeart />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.6}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.8}
        />
      </Canvas>
    </div>
  );
};
