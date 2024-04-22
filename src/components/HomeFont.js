import { TypeAnimation } from 'react-type-animation';
import React, { useState } from 'react';

const HomeFont = () => {
  const [textColor, setTextColor] = useState('#ff4c38');
  return (
    <div style={{display:"flex",flexDirection:"column",textAlign:"center",height: "300px"}}>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
 
          "Hello !👋\n", // wait 1s before replacing "Mice" with "Hamsters"
          1000,
        ]}
        cursor={false}
        wrapper="span"
        speed={25}
        style={{ 
          whiteSpace: 'pre-line',
          fontSize: '1.5em', 
          display: 'inline-block',
          textAlign:"center", 
          fontFamily: 'Lato, sans-serif', 
          color: "#ff4c38"}}
        repeat={Infinity}
      /> 
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially

          "I'm Oğuzhan Göksu",
          1000,
           // wait 1s before replacing "Mice" with "Hamsters"
        
        ]}
        cursor={false}
        wrapper="span"
        speed={25}
        style={{ 
          whiteSpace: 'pre-line',
          fontSize: '1.5em', 
          display: 'inline-block',
          textAlign:"center", 
          fontFamily: 'Lato, sans-serif', 
          color: 'white'}}
        repeat={Infinity}
      /> 
      <br/>
      <div style={{color:textColor}}>
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          
          () => setTextColor('#98d343'),
          'Computer Engineer 🚀',
          2000,
          'Computer Engineer',
          100,
          'Computer',
          100,
          '',
          1,
          () => setTextColor('#ff4c38'),
          'Full-Stack Developer🌐',
          2000,
          'Full-Stack Developer',
          100,
          'Full-Stack',
          100,
          '',
          1
          
        ]}
        cursor={false}
        repeat={Infinity}
        speed={25}
        style={{ 
          whiteSpace: 'pre-line',
          fontSize: '1.5em', 
          display: 'inline-block',
          textAlign:"center", 
          fontFamily: 'Lato, sans-serif'}}
        />
      </div>
    </div>
    
  );
};

export default HomeFont;