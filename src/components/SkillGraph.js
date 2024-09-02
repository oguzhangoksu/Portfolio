// src/SkillGraph.js
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader, extend   } from '@react-three/fiber';
import { OrbitControls, Sphere, Text, Line,Billboard } from '@react-three/drei';
import * as THREE from 'three';

import Node from './Node';
import OrbitalPath from './ObitalPath';
import StarField from './StarField';
import Sun from './Sun';
import '../styles/SkillGraph.css';
import github from '../assets/github-svgrepo-com.svg';
import git from '../assets/git-svgrepo-com.svg';
import vscode from '../assets/logo-microsoft-vs-code-svgrepo-com.svg';
import docker from '../assets/docker-svgrepo-com.svg';
import javascript from '../assets/icons8-javascript.svg';
import python from '../assets/python-svgrepo-com.svg';
import java from '../assets/java.svg';
import C from '../assets/c.svg';
import Cplus from '../assets/c++.svg';
import sql from '../assets/sql-database-generic.svg';
import html from '../assets/icons8-html5.svg';
import css from '../assets/icons8-css.svg';
import nodejs from '../assets/icons8-nodejs-96.svg';
import react from '../assets/icons8-react.svg';
import django from '../assets/icons8-django.svg';
import spring from '../assets/spring-svgrepo-com.svg';
import sqlite from '../assets/sql-database-generic.svg';
import mysql from '../assets/mysql-logo-svgrepo-com.svg';
import posgresql from '../assets/postgresql-svgrepo-com.svg';
import firebase from '../assets/firebase-svgrepo-com.svg';
import SkillOverlay from './SkillOverlay';
import skills from '../data/skillData';
// At the top of your file, add this line:
extend({ PlaneGeometry: THREE.PlaneGeometry });

// MovingNode component for orbiting effect
const MovingNode = React.forwardRef(({ children, radius, speed, isSystemPaused }, ref) => {
  const pausedTime = useRef(0);
  const lastPauseTime = useRef(0);


  useFrame(({ clock }) => {
    if (ref.current) {
      if (isSystemPaused) {
        if (lastPauseTime.current === 0) {
          lastPauseTime.current = clock.getElapsedTime();
        }
      } else {
        if (lastPauseTime.current !== 0) {
          pausedTime.current += clock.getElapsedTime() - lastPauseTime.current;
          lastPauseTime.current = 0;
        }
        const t = (clock.getElapsedTime() - pausedTime.current) * speed;
        ref.current.position.x = radius * Math.sin(t);
        ref.current.position.z = radius * Math.cos(t);
      }
    }
  });
  return <group ref={ref}>{children}</group>;
});

const MovingNodeSubs = React.forwardRef(({ children, radius, speed, yFrequency, yAmplitude, isSystemPaused }, ref) => {
  const pausedTime = useRef(0);
  const lastPauseTime = useRef(0);

  useFrame(({ clock }) => {
    if (ref.current) {
      if (isSystemPaused) {
        if (lastPauseTime.current === 0) {
          lastPauseTime.current = clock.getElapsedTime();
        }
      } else {
        if (lastPauseTime.current !== 0) {
          pausedTime.current += clock.getElapsedTime() - lastPauseTime.current;
          lastPauseTime.current = 0;
        }
        const t = (clock.getElapsedTime() - pausedTime.current) * speed;
        ref.current.position.x = radius * Math.sin(t);
        ref.current.position.y = yAmplitude * Math.sin(t * yFrequency);
        ref.current.position.z = radius * Math.cos(t);
      }
    }
  });
  return <group ref={ref}>{children}</group>;
});

// Link component to draw dynamic lines between nodes
const DynamicLink = ({ startRef, endRef }) => {
    const lineRef = useRef();
    const [points, setPoints] = useState([[0, 0, 0], [0, 0, 0]]);
    
    useFrame(() => {
      if (startRef.current && endRef.current) {
        const start = startRef.current.position;
        const end = endRef.current.position;
        setPoints([[start.x, start.y, start.z], [end.x, end.y, end.z]]);
      }
    });
  
    return <Line ref={lineRef} points={points} color="white" lineWidth={1.5} dashed={false} />;
  };




const SkillGraph = () => {
  const centerRef = useRef();
  const techRef = useRef();
  const langRef = useRef();
  const toolsRef = useRef();
  const [isAnyNodeHovered, setIsAnyNodeHovered] = useState(false);

  const handleNodeHover = (hovered) => {
    setIsAnyNodeHovered(hovered);
  };

  // Subnode refs for each category
  const techSubRefs = [useRef(), useRef(), useRef(),useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const langSubRefs = [useRef(), useRef(), useRef(),useRef(), useRef(), useRef(),useRef(), useRef()];
  const toolsSubRefs = [useRef(), useRef(), useRef(), useRef()];

  return (
    <div className= "canvasContainer">
     <Canvas className= "roundCanvas" camera={{ position: [0,35,70], fov: 65 }}>
       <color attach="background" args={['#02021f']}  />
       <ambientLight intensity={0.5} />
       <StarField/>
      <OrbitControls enableZoom={true} />

      {/* Central Node (You) */}
      <Sun ref={centerRef} position={[0, 0, 0]}  size={4} label="My Skills" />

      <OrbitalPath radius={15} color="gray" />
      <OrbitalPath radius={30} color="gray" />
      <OrbitalPath radius={45} color="gray" />
      
      {/* Main Categories with Dynamic Links */}


      <MovingNode ref={toolsRef} radius={15} speed={0.15} yFrequency={1.35} yAmplitude={2.12} isSystemPaused={isAnyNodeHovered}>
        <Node 
        position={[0, 0, 0]} 
        color="#FF99DD" 
        size={3} 
        label="Developer Tools" 
        info={{
          label: "Developer Tools",
        }} 
        onHover={handleNodeHover} 
        isSystemPaused={isAnyNodeHovered}/>


        <MovingNodeSubs ref={toolsSubRefs[0]} radius={7} speed={-0.21} yFrequency={0.6} yAmplitude={2.2} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="pink" 
          size={1.5} 
          label="Github" 
          info={{
            label: "Github",
            logo: github,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
          
        </MovingNodeSubs>
        <MovingNodeSubs ref={toolsSubRefs[1]} radius={7} speed={-0.56} yFrequency={0.96} yAmplitude={3.6} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="pink" 
          size={1.5} 
          label="Git" 
          info={{
            label: "Git",
            logo: git,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={toolsSubRefs[2]} radius={7} speed={-0.34} yFrequency={1.45} yAmplitude={4.2} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="pink" 
          size={1.5} 
          label="VS Code" 
          info={{
            label: "Vs Code",
            logo: vscode,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={toolsSubRefs[3]} radius={7} speed={0.16} yFrequency={1.26} yAmplitude={1.3} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="pink" 
          size={1.5} 
          label="Docker" 
          info={{
            label: "Docker",
            logo: docker,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        
      </MovingNode>

  
      <MovingNode ref={langRef} radius={30} speed={-0.25} yFrequency={0.7} yAmplitude={1.4} isSystemPaused={isAnyNodeHovered}>
        <Node 
        position={[0, 0, 0]} 
        color="rgb(228, 208, 10)"
        size={3} 
        label="Languages" 
        info={{
            label: "Languages",
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>


        <MovingNodeSubs ref={langSubRefs[0]} radius={9} speed={0.2} yFrequency={2.7} yAmplitude={5.6} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="yellow" 
          size={1.5} 
          label="JavaScript" 
          info={{
            label: "JavaScript",
            logo: javascript,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={langSubRefs[1]} radius={9} speed={-0.26} yFrequency={2} yAmplitude={2.4} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="yellow" 
          size={1.5} 
          label="Python" 
          info={{
            label: "Python",
            logo: python,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={langSubRefs[2]} radius={9} speed={0.37} yFrequency={1.7} yAmplitude={7.24} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="yellow" 
          size={1.5} 
          label="Java" 
          info={{
            label: "Java",
            logo: java,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={langSubRefs[3]} radius={9} speed={0.15} yFrequency={0.6} yAmplitude={1.5} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="yellow" 
          size={1.5} 
          label="C" 
          info={{
            label: "C",
            logo: C,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={langSubRefs[4]} radius={9} speed={0.25} yFrequency={0.68} yAmplitude={6.8} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="yellow" 
          size={1.5} 
          label="C++" 
          info={{
            label: "C++",
            logo: Cplus,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={langSubRefs[5]} radius={9} speed={-0.47} yFrequency={0.32} yAmplitude={3.67} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="yellow" 
          size={1.5} 
          label="SQL" 
          info={{
            label: "SQL",
            logo: sql,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={langSubRefs[6]} radius={9} speed={-0.12} yFrequency={0.5} yAmplitude={3.5} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="yellow" 
          size={1.5} 
          label="HTML" 
          info={{
            label: "HTML",
            logo: html,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={langSubRefs[7]} radius={9} speed={-0.78} yFrequency={1.21} yAmplitude={4.5} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="yellow" 
          size={1.5} 
          label="CSS" 
          info={{
            label: "CSS",
            logo: css,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
      </MovingNode>
      
      

      <MovingNode ref={techRef} radius={45} speed={0.2} yFrequency={0.32} yAmplitude={-0.5} isSystemPaused={isAnyNodeHovered}>
        <Node 
        position={[0, 0, 0]} 
        color="red" 
        size={3} 
        label="Technologies/Frameworks" 
        info={{
            label: "Technologies/Frameworks",
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>

        <MovingNodeSubs ref={techSubRefs[0]} radius={9} speed={0.45} yFrequency={2} yAmplitude={3.7} isSystemPaused={isAnyNodeHovered}>   
            <Node 
            position={[0, 0, 0]} 
            color="orange" 
            size={1.5} 
            label="Node.js" 
            info={{
            label: "Node.js",
            logo: nodejs,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={techSubRefs[1]}  radius={9} speed={-0.12} yFrequency={1.5} yAmplitude={6.3} isSystemPaused={isAnyNodeHovered}>
            <Node 
            position={[0, 0, 0]} 
            color="orange" 
            size={1.5} 
            label="React" 
            info={{
            label: "React",
            logo: react,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={techSubRefs[2]} radius={9} speed={0.28} yFrequency={2} yAmplitude={4.7} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="orange" 
          size={1.5} 
          label="Express.js" 
          info={{
            label: "Express.js",
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={techSubRefs[3]} radius={9} speed={-0.52} yFrequency={0.45} yAmplitude={3.6} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="orange" 
          size={1.5} 
          label="Django" 
          info={{
            label: "Django",
            logo: django,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={techSubRefs[4]} radius={9} speed={-0.67} yFrequency={1} yAmplitude={4} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="orange" 
          size={1.5} 
          label="Spring Boot" 
          info={{
            label: "Spring Boot",
            logo: spring,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={techSubRefs[5]} radius={9} speed={-0.73} yFrequency={0.2} yAmplitude={1.23} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="orange" 
          size={1.5} 
          label="SQLite" 
          info={{
            label: "SQLite",
            logo: sqlite,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={techSubRefs[6]} radius={9} speed={0.64} yFrequency={0.78} yAmplitude={7} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="orange" 
          size={1.5} 
          label="MySQL" 
          info={{
            label: "MySQL",
            logo: mysql,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={techSubRefs[7]} radius={9} speed={0.43} yFrequency={0.56} yAmplitude={2.7} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="orange" 
          size={1.5} 
          label="PostgreSQL" 
          info={{
            label: "PostgreSQL",
            logo: posgresql,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
        <MovingNodeSubs ref={techSubRefs[8]} radius={9} speed={-0.45} yFrequency={0.32} yAmplitude={1.5} isSystemPaused={isAnyNodeHovered}>
          <Node 
          position={[0, 0, 0]} 
          color="orange" 
          size={1.5} 
          label="Firebase" 
          info={{
            label: "Firebase",
            logo: firebase,
          }} 
          onHover={handleNodeHover} 
          isSystemPaused={isAnyNodeHovered}/>
        </MovingNodeSubs>
      </MovingNode>

     

      
      <SkillOverlay skills={skills} />
    </Canvas>
    </div>
  );
};

export default SkillGraph;


