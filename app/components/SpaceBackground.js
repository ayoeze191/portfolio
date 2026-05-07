"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

/* ---------------- EARTH ---------------- */
function Earth({ scrollY }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // base slow spin
    ref.current.rotation.y += 0.0015;

    // scroll-driven motion
    const t = scrollY * 0.001;

    ref.current.position.x = Math.sin(t) * 0.5;
    ref.current.position.y = Math.cos(t) * 0.3;

    // slight extra rotation from scroll
    ref.current.rotation.x = t * 0.2;
    ref.current.rotation.z = t * 0.1;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#1e3a8a" roughness={0.8} metalness={0.1} />
    </mesh>
  );
}
/* ---------------- SATELLITE ---------------- */
function Satellite({ scrollY }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;

    // orbit around earth
    ref.current.position.x = Math.cos(t * 0.5) * 4;
    ref.current.position.z = Math.sin(t * 0.5) * 4;
    ref.current.position.y = Math.sin(t * 0.2) * 1.2;

    // scroll influence (story feel)
    ref.current.rotation.y = scrollY * 0.0005;
  });

  return (
    <group ref={ref}>
      {/* body */}
      <mesh>
        <boxGeometry args={[0.5, 0.3, 0.3]} />
        <meshStandardMaterial color="#9ca3af" metalness={1} roughness={0.3} />
      </mesh>

      {/* solar panels */}
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[1, 0.05, 0.4]} />
        <meshStandardMaterial color="#2563eb" emissive="#1d4ed8" />
      </mesh>

      <mesh position={[0.8, 0, 0]}>
        <boxGeometry args={[1, 0.05, 0.4]} />
        <meshStandardMaterial color="#2563eb" emissive="#1d4ed8" />
      </mesh>

      {/* dish receiver */}
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#1d4ed8"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

/* ---------------- SCENE ---------------- */
export default function SpaceScene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 2, 8] }}>
        {/* LIGHTS */}
        <ambientLight intensity={0.6} />

        <directionalLight position={[5, 5, 5]} intensity={2} color="#60a5fa" />

        {/* SPACE STARS */}
        <Stars radius={120} depth={60} count={8000} factor={4} fade speed={1} />

        {/* EARTH */}
        <Earth scrollY={scrollY} />

        {/* SATELLITE */}
        <Satellite scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
