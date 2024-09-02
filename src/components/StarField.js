import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const StarField = ({ count = 5000 }) => {
    const points = useRef();
    
    const positions = useMemo(() => {
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 100;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
      }
      return pos;
    }, [count]);
  
    useFrame((state) => {
      points.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      points.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    });
  
    return (
      <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    );
  };

export default StarField;