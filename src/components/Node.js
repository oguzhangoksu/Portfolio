
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import NodePopup from './NodePopup';
import { Billboard, Text } from '@react-three/drei';

const Node = ({ position, color, size, label, textureUrl, info, onHover, isSystemPaused }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current && !isSystemPaused) {
      // Animate only when the system is not paused
      const t = clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t) * 0.5;
      // Add other animations as needed
    }
  });
  const handlePointerOver = () => {
    setHovered(true);
    onHover(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover(false);
  };

  return (
    <group
      ref={ref}
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} map={textureUrl} />
      </mesh>
      <Billboard>
        <Text
        position={[0, 0, size + 0.5]} // Position text above the node
        fontSize={1.5}
        color="white"
        anchorX="center"
        anchorY="middle"
        >
        {label}
        </Text>
    </Billboard>
 
      {hovered && <NodePopup info={info} position={[size + 1, size/2, 0]} size={size}/>}
    </group>
  );
};


export default Node;