import React from 'react';
import './CustomScrollbar.css'; // Css file for CustomScrollbar.js
import {useState } from 'react';
import image1 from "./image/raspberry-pi.png";
import image2 from "./image/DHT11.png";
import image3 from "./image/608335.jpg";
import image4 from "./image/608535.png";
import ImageSlider from './ImageSlider';
const CustomScrollbar = () => {
    const [stateOnProject1,setStateOnProject1]=useState(false);
    const [stateOnProject2,setStateOnProject2]=useState(false);
    //const [stateOnProject3,setStateOnProject3]=useState(false);
    //const [stateOnProject4,setStateOnProject4]=useState(false);

  function handleProjectClick(e){
    if(e===1){
      window.location.href = "https://github.com/oguzhangoksu/Internship-CihazTarama";    
    }
    else if(e===2){
      window.location.href = "https://github.com/oguzhangoksu/Reading-Humidity_Temperature";    

    }
    /*
    else if(e===3){
      window.location.href ="https://github.com/oguzhangoksu/Reading-Humidity_Temperature";
    }
    else if(4){
      window.location.href ="https://github.com/oguzhangoksu/Mask_RCNN-Multi-Class-Detection";
    }
    */
  }


  const images = [
    image1,
    image2,
    //image3,
    //image4
];


  return (
    <div className="custom-scrollbar">
      <div className="content">
          <ImageSlider images={images}></ImageSlider>
            <div style={{display:'flex',flexDirection:'row'}}>
            {stateOnProject1===true?<div className='img1On' onClick={()=>{handleProjectClick(1)}} onMouseEnter={() => setStateOnProject1(true)} onMouseLeave={() => setStateOnProject1(false)}>DeviceScan(CihazTarama)</div>
            :<div className='img1'onClick={()=>{handleProjectClick(1)}} onMouseEnter={() => setStateOnProject1(true)} onMouseLeave={() => setStateOnProject1(false)}>DeviceScan(CihazTarama)</div>}
            <div className='body'>At the place where I did my internship, IoT devices were used to meet the requirements of Industry 4.0 and enable data acquisition from automation machines in factories. During this usage process, they encountered issues such as power outages or the IoT devices shutting down unexpectedly. As a solution, they wanted to ensure that the IoT devices connected to the same internet were online and requested a live stream of information such as CPU temperature and RAM usage whenever needed. Consequently, a project was implemented to fulfill these requirements.</div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
            <div className='body'>During my internship, they asked me to develop a project to familiarize myself with the technologies and JavaScript language used. The project involved measuring the ambient humidity and temperature in real-time and displaying them in graphical form. The purpose of the project was to store the data as well.</div>
            {stateOnProject2===true?<div className='img2On' onClick={()=>{handleProjectClick(2)}} onMouseEnter={() => setStateOnProject2(true)} onMouseLeave={() => setStateOnProject2(false)}>Humidity Temperature</div>
            :<div className='img2'onClick={()=>{handleProjectClick(2)}} onMouseEnter={() => setStateOnProject2(true)} onMouseLeave={() => setStateOnProject2(false)}>Humidity-Temperature</div>}
          </div>
          
      </div>
    </div>
  );
};

export default CustomScrollbar;