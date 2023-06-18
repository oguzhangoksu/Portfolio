import './Contact.css';
import {useState } from 'react';
import {Navigate } from "react-router-dom";

export function Contact(){
    const [stateAbout,setStateAbout]=useState(false);
    //const [stateResume,setStateResume]=useState(false);
    const [stateProjects,setStateProjects]=useState(false);
    const [stateContact,setStateContact]=useState(false);
    const [stateOnCurserAbout,setStateOnCurserAbout]=useState(false);
    //const [stateOnCurserResume,setStateOnCurserResume]=useState(false);
    const [stateOnCurserProjects,setStateOnCurserProjects]=useState(false);
    const [stateOnCurserContact,setStateOnCurserContact]=useState(false);
    const [stateOnCurserEmail,setStateOnCurserEmail]=useState(false);

    function handleClickAbout(e){
        setStateAbout(true);
    }/*
    function handleClickResume(){
        setStateResume(true);
    }*/
    function handleClickProjects(){
        setStateProjects(true);
    }
    function handleClickContact(){
      setStateContact(true);
    }
    function handleEmailClick(){
        window.location.href = 'mailto:oguzhang16@gmail.com'
    }
    const body={
        color:'white',
        display:'flex',
        alignItems:'center',
        height:'90px'
    }
    const body2={
        color:'rgba(58,217,213,255)',
        display:'flex',
        alignItems:'center',
        height:'90px'
    }



    return(
        <div className="App">
            <div className="Menu">
                {stateOnCurserAbout===true?<div style={{paddingRight:'0px'}} className='LinkerOnCursor' onMouseEnter={() => setStateOnCurserAbout(true)} onMouseLeave={() => setStateOnCurserAbout(false)} onClick={handleClickAbout}>{"About"}</div>
                :<div style={{paddingRight:'0px'}} className='Linker'onMouseEnter={() => setStateOnCurserAbout(true)} onMouseLeave={() => setStateOnCurserAbout(false)} onClick={handleClickAbout} >{"About"}</div>}
                {/*stateOnCurserResume===true?<div className='LinkerOnCursor' onMouseEnter={() => setStateOnCurserResume(true)} onMouseLeave={() => setStateOnCurserResume(false)} onClick={handleClickResume}>{"Resume"}</div>:
                <div className='Linker' onMouseEnter={() => setStateOnCurserResume(true)} onMouseLeave={() => setStateOnCurserResume(false)} onClick={handleClickResume}>{"Resume"}</div>*/}
                {stateOnCurserProjects===true?<div className='LinkerOnCursor'onMouseEnter={() => setStateOnCurserProjects(true)} onMouseLeave={() => setStateOnCurserProjects(false)} onClick={handleClickProjects}>{"Projects"}</div>:
                <div className='Linker' onMouseEnter={() => setStateOnCurserProjects(true)} onMouseLeave={() => setStateOnCurserProjects(false)} onClick={handleClickProjects}>{"Projects"}</div>}
                {stateOnCurserContact===true?<div className='LinkerOnCursor'onMouseEnter={() => setStateOnCurserContact(true)} onMouseLeave={() => setStateOnCurserContact(false)} onClick={handleClickContact}>{"Contact"}</div>
                :<div className='Linker'onMouseEnter={() => setStateOnCurserContact(true)} onMouseLeave={() => setStateOnCurserContact(false)} onClick={handleClickContact}>{"Contact"}</div>}
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
                    {stateOnCurserEmail===true?<div style={body2} onMouseEnter={() => setStateOnCurserEmail(true)} onMouseLeave={() => setStateOnCurserEmail(false)} href={'mailto:oguzhang16@gmail.com'} onClick={handleEmailClick}>oguzhang16@gmail.com</div>
                    :<div style={body} onMouseEnter={() => setStateOnCurserEmail(true)} onMouseLeave={() => setStateOnCurserEmail(false)} href={'mailto:oguzhang16@gmail.com'} onClick={handleEmailClick}>oguzhang16@gmail.com</div>}
                </div>
                
            </div>
            {stateAbout===true?<Navigate to="/" />:<></>}
            {/*stateResume===true?<Navigate to="/Resume" />:<></>*/}
            {stateProjects===true?<Navigate to="/Projects" />:<></>}
            {stateContact===true?<Navigate to="/Contact" />:<></>}
            
        </div>
        
    );

}

export default Contact;


/*

                <div style={{display:'flex',flexDirection:'row',justifySelf:'flex-end'}}>
                    <div className='WhatsApp'></div>
                    <div style={{color:'white',alignItems:'center',justifyContent:'center'}}>asdsadasdsddasadsaasdasdasdasdasdasdasdasdasdasds</div>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div className='Phone'></div>
                    <div style={{color:'white',alignItems:'center',justifyContent:'center'}}>asdsadasdasdsdasdasdasdasdasds</div>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div className='Email'></div>
                    <div style={{color:'white',alignItems:'center',justifyContent:'center'}}>asdsadasdasdsdasdasdasdasdasds</div>
                    
                </div>


*/