import React from 'react';
import './css/CustomScrollbar.css'; // Css file for CustomScrollbar.js
import {useState } from 'react';
import image1 from "./image/raspberry-pi.png";
import image2 from "./image/DHT11.png";
import image3 from "./image/608335.jpg";
import image4 from "./image/608535.png";
import ImageSlider from './ImageSlider';
const CustomScrollbar = () => {

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

  function handleEnter(e){
    if(e%2==0){
      document.getElementById(`${e}`).className = "onright";
    }
    else{
      document.getElementById(`${e}`).className = "onleft";
    }
  }
  function handleLeave(e){
    if(e%2==0){
      document.getElementById(`${e}`).className = "offright";
    }
    else{
      document.getElementById(`${e}`).className = "offleft";
    }
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
          
            <div id="1" className='offright' onClick={()=>handleProjectClick(1)} onMouseEnter={()=>{handleEnter(1)}} onMouseLeave={()=>handleLeave(1)}>
              <div className='img1'>DeviceScanner(CihazTarama)</div>
              <div className='body'>At the place where I did my internship, IoT devices were used to meet the requirements of Industry 4.0 and enable data acquisition from automation machines in factories. During this usage process, they encountered issues such as power outages or the IoT devices shutting down unexpectedly. As a solution, they wanted to ensure that the IoT devices connected to the same internet were online and requested a live stream of information such as CPU temperature and RAM usage whenever needed. Consequently, a project was implemented to fulfill these requirements.</div>
            </div>
      
            <div id ="2" className='offleft' onClick={()=>handleProjectClick(2)} onMouseEnter={()=>{handleEnter(2)}} onMouseLeave={()=>handleLeave(2)}>
              
              
              <div className='body'>During my internship, they asked me to develop a project to familiarize myself with the technologies and JavaScript language used. The project involved measuring the ambient humidity and temperature in real-time and displaying them in graphical form. The purpose of the project was to store the data as well.</div>
              <div className='img2'> Humidity-Temperature</div>
          </div>
          
      </div>
    </div>
  );
};

export default CustomScrollbar;