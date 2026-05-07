"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

function Earth({ scrollY }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    const t = scrollY * 0.001;

    // drifting Earth (feels like you're flying past it)
    ref.current.position.x = Math.sin(t) * 2;
    ref.current.position.y = Math.cos(t * 0.8) * 1;
    ref.current.position.z = -t * 2;

    // slow rotation
    ref.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#1e3a8a" roughness={0.9} />
    </mesh>
  );
}

function Satellite({ scrollY }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;

    // orbit + scroll drift (feels like passing by it in space)
    ref.current.position.x = Math.cos(t * 0.5) * 4 + scrollY * 0.0005;
    ref.current.position.z = Math.sin(t * 0.5) * 4 - scrollY * 0.002;
    ref.current.position.y = Math.sin(t * 0.3) * 1.5;

    ref.current.rotation.y += 0.002;
  });

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[0.5, 0.3, 0.3]} />
        <meshStandardMaterial color="#9ca3af" metalness={1} />
      </mesh>

      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[1, 0.05, 0.4]} />
        <meshStandardMaterial color="#2563eb" emissive="#1d4ed8" />
      </mesh>

      <mesh position={[0.8, 0, 0]}>
        <boxGeometry args={[1, 0.05, 0.4]} />
        <meshStandardMaterial color="#2563eb" emissive="#1d4ed8" />
      </mesh>
    </group>
  );
}

export default function SpaceScene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* SPACE FIELD */}
        <Stars
          radius={120}
          depth={80}
          count={10000}
          factor={4}
          fade
          speed={0.5}
        />

        {/* SCENE OBJECTS */}
        <Earth scrollY={scrollY} />
        <Satellite scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
