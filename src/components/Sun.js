import { Billboard, Sphere, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Sun = React.forwardRef(({ position = [0, 0, 0], size = 4, label = "My Skills" },ref) => {
    const sunRef = useRef();
    const glowRef = useRef();
  
    useFrame(({ clock }) => {
      if (sunRef.current && glowRef.current) {
        const t = clock.getElapsedTime();
        sunRef.current.rotation.y = t * 0.5;
        glowRef.current.material.opacity = 0.6 + Math.sin(t * 2) * 0.1;
      }
    });
    return (
        <group ref={ref} position={position}>
          <Sphere ref={sunRef} args={[size, 32, 32]}>
            <meshBasicMaterial color="yellow" />
          </Sphere>
          <Sphere ref={glowRef} args={[size * 1.2, 32, 32]}>
            <meshBasicMaterial color="orange" transparent opacity={0.4} />
          </Sphere>
          <Billboard>
            <Text
              position={[0, 0, size + 1]}
              fontSize={1.5}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              {label}
            </Text>
          </Billboard>
        </group>
      );
});

export default Sun;