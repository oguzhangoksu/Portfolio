import './css/App.css';
import {useState } from 'react';
import { Navigate } from "react-router-dom";
export function About(){
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
        else if(e==="Github"){
          window.open("https://github.com/oguzhangoksu");
        }
        else if(e==="Linkedin"){
          window.open("https://www.linkedin.com/in/oguzhangoksu");
        }/*
        else if(e==="ResumeDown"){
          window.open(Pdf);
        }*/
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
      else if(e==="Github"){
        document.getElementById("github").className = "GithubOnCursor";
      }
      else if(e==="Linkedin"){
        document.getElementById("linkedin").className = "LinkedinOnCursor";
      }/*
      else if(e==="ResumeDown"){
        document.getElementById("resume").className = "ResumeOnCursor";
      }*/

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
      else if(e==="Github"){
        document.getElementById("github").className = "Github";
      }
      else if(e==="Linkedin"){
        document.getElementById("linkedin").className = "Linkedin";
      }
      /*
      else if(e==="ResumeDown"){
        document.getElementById("resume").className = "Resume";
      }*/

    }



    return (
    <div className="App">
      
      <div className="Menu">
        <div id="about" className='Linker' onClick={()=>{handleClick("About")}} onMouseEnter={()=>{handleMouseEnter("About")}} onMouseLeave={()=>{handleMouseLeave("About")}}>About</div>
        <div id="projects" className='Linker' onClick={()=>{handleClick("Projects")}} onMouseEnter={()=>{handleMouseEnter("Projects")}} onMouseLeave={()=>{handleMouseLeave("Projects")}} >Projects</div>
        <div id="contact" className='Linker' onClick={()=>{handleClick("Contact")}} onMouseEnter={()=>{handleMouseEnter("Contact")}} onMouseLeave={()=>{handleMouseLeave("Contact")}}>Contact</div>

      </div>
      <div className='Box'>
        <div className="header">I'm Oğuzhan Göksu</div>
        <div className='body' style={{marginLeft:'5%',paddingBottom:'0px'}}>{"Currently in my third year of pursuing a degree in Computer Engineering."}</div>
        <div className='body'style={{paddingTop:'0px'}}>{ "Throughout my academic journey in this captivating field, I have developed a comprehensive understanding of both the hardware and software facets of computing. I have refined my programming abilities in languages such as C++, Java, and Python, and also acquired practical knowledge in areas like digital circuit design and embedded systems. Outside of the school, I experienced with React, Javascript and Mysql in my internship.Right now,I be occupied in doing few project on my on."}</div>
      </div>
      <div className='Box-Before'>
        <div id="github" className='Github'  onClick={()=>{handleClick("Github")}} onMouseEnter={()=>{handleMouseEnter("Github")}} onMouseLeave={()=>{handleMouseLeave("Github")}}></div>
        <div id="linkedin" className='Linkedin' onClick={()=>{handleClick("Linkedin")}} onMouseEnter={()=>{handleMouseEnter("Linkedin")}} onMouseLeave={()=>{handleMouseLeave("Linkedin")}}></div>
      </div>
      {stateAbout===true?<Navigate to="/Resume/" />:<></>}
      {stateProjects===true?<Navigate to="/Resume/Projects" />:<></>}
      {stateContact===true?<Navigate to="/Resume/Contact" />:<></>}
    </div>
  );
}


//make a clickable box with a link to resume and projects



export default About;