"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

// Animated wireframe icosahedron
function WireIcosahedron({
  position,
  color,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = t * 0.4;
    meshRef.current.rotation.y = t * 0.6;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.8} />
      </mesh>
    </Float>
  );
}

function WireTorus({
  position,
  color,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = t * 0.5;
    meshRef.current.rotation.z = t * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.35, 12, 24]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

function WireOctahedron({
  position,
  color,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.y = t * 0.7;
    meshRef.current.rotation.x = t * 0.4;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.9}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.85} />
      </mesh>
    </Float>
  );
}

// Particle field
function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 1200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

// Central rotating wireframe sphere
function CentralCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.2;
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Outer rings */}
      <mesh>
        <torusGeometry args={[2.5, 0.02, 8, 64]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.3, 0.015, 8, 64]} />
        <meshBasicMaterial color="#ff00aa" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[2.1, 0.01, 8, 64]} />
        <meshBasicMaterial color="#b537f2" transparent opacity={0.4} />
      </mesh>
      {/* Core wireframe */}
      <mesh>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.7} />
      </mesh>
      <mesh scale={0.95}>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshBasicMaterial color="#ff00aa" wireframe transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function CyberScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <ParticleField />
          <CentralCore />

          {/* Floating wireframe shapes */}
          <WireIcosahedron position={[-4, 2, -3]} color="#00f0ff" scale={0.6} speed={0.8} />
          <WireIcosahedron position={[4, -1.5, -2]} color="#ff00aa" scale={0.5} speed={1.2} />
          <WireTorus position={[3, 2.5, -4]} color="#b537f2" scale={0.7} speed={0.6} />
          <WireTorus position={[-3.5, -2, -3]} color="#00f0ff" scale={0.55} speed={1} />
          <WireOctahedron position={[5, 0, -5]} color="#fff200" scale={0.5} speed={0.9} />
          <WireOctahedron position={[-5, 1.5, -4]} color="#ff2a6d" scale={0.45} speed={1.1} />
          <WireIcosahedron position={[0, -3, -3]} color="#39ff14" scale={0.4} speed={0.7} />
          <WireOctahedron position={[2, 3, -3]} color="#b537f2" scale={0.35} speed={1.3} />
        </Suspense>
      </Canvas>
    </div>
  );
}
