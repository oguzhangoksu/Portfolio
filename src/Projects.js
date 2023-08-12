import './css/App.css';
import {useState } from 'react';
import { Navigate } from "react-router-dom";
import CustomScrollbar from './CustomScrollbar';

export function Projects(){
    const [stateAbout,setStateAbout]=useState(false);
    //const [stateResume,setStateResume]=useState(false);
    const [stateProjects,setStateProjects]=useState(false);
    const [stateContact,setStateContact]=useState(false);
    const [stateOnCurserAbout,setStateOnCurserAbout]=useState(false);
    //const [stateOnCurserResume,setStateOnCurserResume]=useState(false);
    const [stateOnCurserProjects,setStateOnCurserProjects]=useState(false);
    const [stateOnCurserContact,setStateOnCurserContact]=useState(false);


    function handleClickAbout(e){
        setStateAbout(true);
    }
    /*
    function handleClickResume(){
        setStateResume(true);
    }*/
    function handleClickProjects(){
        setStateProjects(true);
    }
    function handleClickContact(){
      setStateContact(true);
    }

    const scrollbars={
        display:'flex ',
        width: '500px ',
        height: '500px',
        justifySelf:'center',
        alignSelf:'center',
        marginTop:'10%',
        color:'white'
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
            <div style={{marginTop:'6%',width:'1050px',height:'100%',position:'fixed'}} className='Box-Before'></div>
            <CustomScrollbar  /> 
            {stateAbout===true?<Navigate to="/Resume/" />:<></>}
            {/*stateResume===true?<Navigate to="/Resume" />:<></>*/}
            {stateProjects===true?<Navigate to="/Resume/Projects" />:<></>}
            {stateContact===true?<Navigate to="/Resume/Contact" />:<></>}
            
        </div>
        
    );
}

export default Projects;