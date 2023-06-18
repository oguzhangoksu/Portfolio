import './App.css';
import {useState } from 'react';
import { Navigate } from "react-router-dom";
import Pdf from './Pdf/OĞUZHAN_GÖKSU_CV.pdf';
export function About(){
    const [stateAbout,setStateAbout]=useState(false);
    //const [stateResume,setStateResume]=useState(false);
    const [stateProjects,setStateProjects]=useState(false);
    const [stateContact,setStateContact]=useState(false);
    const [stateResumeDow,setStateResumeDow]=useState(false);
    const [stateOnCurserGit,setStateOnCurserGit]=useState(false);
    const [stateOnCurserLin,setStateOnCurserLin]=useState(false);
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
    }
    */
    function handleClickProjects(){
        setStateProjects(true);
    }
    function handleClickContact(){
      setStateContact(true);
    }

    function handleClickGithub(){
      window.location.href = 'https://github.com/oguzhangoksu';
    }
    function handleClickLinked(){
      window.location.href = 'https://www.linkedin.com/in/o%C4%9Fuzhan-g%C3%B6ksu-155436236/';
    }




    return (
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
      <div className='Box'>
        <div className="header">I'm Oğuzhan Göksu</div>
        <div className='body' style={{marginLeft:'5%',paddingBottom:'0px'}}>{"Currently in my third year of pursuing a degree in Computer Engineering."}</div>
        <div className='body'style={{paddingTop:'0px'}}>{ "Throughout my academic journey in this captivating field, I have developed a comprehensive understanding of both the hardware and software facets of computing. I have refined my programming abilities in languages such as C++, Java, and Python, and also acquired practical knowledge in areas like digital circuit design and embedded systems. Outside of the school, I experienced with React, Javascript and Mysql in my internship.Right now,I be occupied in doing few project on my on."}</div>
      </div>
      <div className='Box-Before'>
        {stateOnCurserGit===true?<div className='GithubOnCursor' onMouseEnter={() => setStateOnCurserGit(true)} onMouseLeave={() => setStateOnCurserGit(false)} onClick={handleClickGithub}></div>
        :<div className='Github'  onMouseEnter={() => setStateOnCurserGit(true)} onMouseLeave={() => setStateOnCurserGit(false)} onClick={handleClickGithub}></div>}
        {stateOnCurserLin===true?<div className='LinkedinOnCursor' onMouseEnter={() => setStateOnCurserLin(true)} onMouseLeave={() => setStateOnCurserLin(false)} onClick={handleClickLinked}></div>
        :<div className='Linkedin'onMouseEnter={() => setStateOnCurserLin(true)} onMouseLeave={() => setStateOnCurserLin(false)} onClick={handleClickLinked}></div>}
        {stateResumeDow===true?<div className='ResumeOnCursor' onMouseEnter={() => setStateResumeDow(true)} onMouseLeave={() => setStateResumeDow(false)} onClick={()=>window.open(Pdf)}>{"Resume"}<div className='Img'></div></div>
        :<div className='Resume' onMouseEnter={() => setStateResumeDow(true)} onMouseLeave={() => setStateResumeDow(false)} onClick={()=>window.open(Pdf)}>{"Resume"}<div className='Img'></div></div>}
      </div>
      {stateAbout===true?<Navigate to="/Resume/" />:<></>}
      {/*stateResume===true?<Navigate to="/Resume" />:<></>*/}
      {stateProjects===true?<Navigate to="/Resume/Projects" />:<></>}
      {stateContact===true?<Navigate to="/Resume/Contact" />:<></>}
    </div>
  );
}


//make a clickable box with a link to resume and projects



export default About;