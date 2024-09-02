import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Billboard, Html } from '@react-three/drei';
import * as THREE from 'three';

const SkillOverlay = ({ skills }) => {
  const ref = useRef();
  const { camera } = useThree(); // Access the camera from the three.js context



  return (
    <Billboard ref={ref} position={[16,28,57]}>
      <Html
        transform
        occlude={false}
        style={{
          width: '250px',
          height: '100%',
          overflow: 'auto',
          background: 'rgba(0,0,0,0.7)',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} style={{ marginBottom: '20px' }}>
            <h3 style={{ color: 'white', marginBottom: '10px' }}>{category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {skillList.map((skill, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  margin: '5px',
                  width: '60px'
                }}>
                  <img src={skill.logo} alt={skill.name} style={{ width: '30px', height: '30px' }} />
                  <span style={{ color: 'white', fontSize: '10px', marginTop: '3px', textAlign: 'center' }}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Html>
    </Billboard>
  );
};

export default SkillOverlay;