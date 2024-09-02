import React from 'react';
import { Html } from '@react-three/drei';
import  '../styles/NodePopup.css';
/*<img src={info.logo} alt={info.label} className="logo" /> */
const NodePopup = ({ info, position ,size}) => {
  return (
    <Html position={position}>
      <div className="popup">
        <img src={info.logo} width={"50px"} height={"50px"}></img>
        <h3>{info.label}</h3>
        <p>{info.description}</p>
      </div>
    </Html>
  );
};

export default NodePopup;