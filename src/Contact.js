import './css/Contact.css';
import {useState } from 'react';
import {Navigate } from "react-router-dom";

export function Contact(){
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
        else if(e==="Email"){
            console.log("Email");
            window.location.href = 'mailto:oguzhang16@gmail.com'
        }
            

    }
    function handleMouseEnter(e){
        console.log("Mouse Enter",e);
        if(e==="About"){
            document.getElementById("about").className = "LinkerOnCursor";
        }
        else if(e==="Projects"){
            document.getElementById("projects").className = "LinkerOnCursor";
        }
        else if(e==="Contact"){
            document.getElementById("contact").className = "LinkerOnCursor";
        }
        else if(e==="Email"){
            console.log("enter girdi")
            document.getElementById("email").className = "EmailAdressOn";
        }

    }
    function handleMouseLeave(e){
        console.log("Mouse Leave",e);
        if(e==="About"){
            document.getElementById("about").className = "Linker";
        }
        else if(e==="Projects"){
            document.getElementById("projects").className = "Linker";
        }
        else if(e==="Contact"){
            document.getElementById("contact").className = "Linker";
        }
        else if(e==="Email"){
            console.log("leave girdi")
            document.getElementById("email").className = "EmailAdress";
        }
    

    }
    const body={
        color:'white',
        display:'flex',
        alignItems:'center',
        height:'90px',
    }



    return(
        <div className="App">
            <div className="Menu">
                <div id="about" className='Linker' onClick={()=>{handleClick("About")}} onMouseEnter={()=>{handleMouseEnter("About")}} onMouseLeave={()=>{handleMouseLeave("About")}}>About</div>
                <div id="projects" className='Linker' onClick={()=>{handleClick("Projects")}} onMouseEnter={()=>{handleMouseEnter("Projects")}} onMouseLeave={()=>{handleMouseLeave("Projects")}} >Projects</div>
                <div id="contact" className='Linker' onClick={()=>{handleClick("Contact")}} onMouseEnter={()=>{handleMouseEnter("Contact")}} onMouseLeave={()=>{handleMouseLeave("Contact")}}>Contact</div>

            </div>
            <div className='Box-Before2'></div>
            <div className='Box2'>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div className='WhatsApp'></div>
                    <div style={body}>+90 05417292693</div>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div className='Phone'></div>
                    <div style={body}>+90 05417292693</div>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div className='Email'></div>
                    <div id="email" className="EmailAdress" href={'mailto:oguzhang16@gmail.com'} onClick={()=>{handleClick("Email")}} onMouseEnter={()=>{handleMouseEnter("Email")}} onMouseLeave={()=>{handleMouseLeave("Email")}}>oguzhang@gmail.com</div>                
                </div>
                
            </div>
            {stateAbout===true?<Navigate to="/Resume/" />:<></>}
            {stateProjects===true?<Navigate to="/Resume/Projects" />:<></>}
            {stateContact===true?<Navigate to="/Resume/Contact" />:<></>}
            
        </div>
        
    );

}

export default Contact;
