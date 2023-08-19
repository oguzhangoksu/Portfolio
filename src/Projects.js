import './css/App.css';
import {useState } from 'react';
import { Navigate } from "react-router-dom";
import CustomScrollbar from './CustomScrollbar';

export function Projects(){
    const [stateAbout,setStateAbout]=useState(false);
    const [stateProjects,setStateProjects]=useState(false);
    const [stateContact,setStateContact]=useState(false);



    function handleClick(e){
        if(e==="About"){
          setStateAbout(true);
        }
        else if(e==="Projects"){
          setStateProjects(true);
        }
        else if(e==="Contact"){
          setStateContact(true);
        }
    }
    function handleMouseEnter(e){
      if(e==="About"){
        document.getElementById("about").className = "LinkerOnCursor";
      }
      else if(e==="Resume"){
        document.getElementById("resume").className = "LinkerOnCursor";
      }
      else if(e==="Projects"){
        document.getElementById("projects").className = "LinkerOnCursor";
      }
      else if(e==="Contact"){
        document.getElementById("contact").className = "LinkerOnCursor";
      }

    }
    function handleMouseLeave(e){
      if(e==="About"){
        document.getElementById("about").className = "Linker";
      }
      else if(e==="Resume"){
        document.getElementById("resume").className = "Linker";
      }
      else if(e==="Projects"){
        document.getElementById("projects").className = "Linker";
      }
      else if(e==="Contact"){
        document.getElementById("contact").className = "Linker";
      }

    }
    return(
        <div className="App">
            <div className="Menu">
                <div id="about" className='Linker' onClick={()=>{handleClick("About")}} onMouseEnter={()=>{handleMouseEnter("About")}} onMouseLeave={()=>{handleMouseLeave("About")}}>About</div>
                <div id="projects" className='Linker' onClick={()=>{handleClick("Projects")}} onMouseEnter={()=>{handleMouseEnter("Projects")}} onMouseLeave={()=>{handleMouseLeave("Projects")}} >Projects</div>
                <div id="contact" className='Linker' onClick={()=>{handleClick("Contact")}} onMouseEnter={()=>{handleMouseEnter("Contact")}} onMouseLeave={()=>{handleMouseLeave("Contact")}}>Contact</div>

            </div>
            <div style={{marginTop:'10%',width:'1050px',height:'100%',position:'fixed'}} className='Box-Before'></div>
            <CustomScrollbar  /> 
            {stateAbout===true?<Navigate to="/Resume/" />:<></>}
            {stateProjects===true?<Navigate to="/Resume/Projects" />:<></>}
            {stateContact===true?<Navigate to="/Resume/Contact" />:<></>}
            
        </div>
        
    );
}

export default Projects;