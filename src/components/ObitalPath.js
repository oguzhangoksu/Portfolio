import { Line } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const OrbitalPath = ({ radius, segments = 64, color = 'gray' }) => {
    const points = useMemo(() => {
      const temp = [];
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        temp.push(new THREE.Vector3(
          radius * Math.cos(theta),
          0,
          radius * Math.sin(theta)
        ));
      }
      return temp;
    }, [radius, segments]);
  
    return <Line points={points} color={color} lineWidth={1} />;
  };

  export default OrbitalPath; 