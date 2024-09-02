import Container from "react-bootstrap/esm/Container";
import "../styles/style.css";
import personAvatar from "../assets/person-avatar.png";
import nodejs from "../assets/icons8-nodejs-96.svg";
import react from "../assets/icons8-react.svg";
import django from "../assets/icons8-django.svg";
import javascript from "../assets/icons8-javascript.svg";
import python from "../assets/python-svgrepo-com.svg";
import mongodb from "../assets/mongodb-svgrepo-com.svg";
import java from "../assets/java.svg";
import sql from "../assets/sql-database-generic.svg";
import html from "../assets/icons8-html5.svg";
import css from "../assets/icons8-css.svg";
import mysql from "../assets/mysql-logo-svgrepo-com.svg";
import git from "../assets/git-svgrepo-com.svg"
import C from "../assets/c.svg";
import Cpp from "../assets/c++.svg";
import SkillGraph from "../components/SkillGraph";


function About() {
    return (
        <section>
            <Container fluid className="background-image">
                <Container fluid className="about-content">
                    <div className="row" style={{marginTop:30,textAlign:"center"}}>
                        <div className="col-lg-6">
                            <p className="about-font1">Hello, I’m <span style={{color:"#ff4c38"}}>Oğuzhan Göksu</span>, </p>
                            <p className="about-font2">a passionate Computer Engineer with a flair for innovation and creativity. My journey through the world of technology is showcased in the projects I’ve built, which you can explore on my portfolio. My academic excellence is reflected in my consistent high grades across all university courses. I’ve also earned certifications in <span > <a style={{color:"#ff4c38"}} href="https://courses.edx.org/certificates/b2329b1fec83496ab148ce8c88cf66f3">CS50’s Web Programming with Python and JavaScript</a> and <a style={{color:"#ff4c38"}} href="https://www.freecodecamp.org/certification/fcc8e7499c4-5a05-48c6-aaf3-902586c706f8/back-end-development-and-apis">Back End Development and APIs.</a></span> With a diverse skill set, I’m ready to tackle real-world challenges and contribute to cutting-edge solutions. 🚀👨‍💻</p>
                        </div>
                        <div className="col-lg-6 " style={{textAlign:"center"}} >
                            <img src={personAvatar}  className="person-avatar" alt="Person Avatar"/>
                        </div>
                    </div>
                    
                    <div className="row" style={{marginTop:100}}>
                    <div className="col-lg-12" style={{textAlign:"center"}}>
                        <h2 className="about-header">My Skill Set</h2>
                    </div>
                    <SkillGraph />
                    </div>
                   
                    
                </Container>
                
            </Container>
            
        </section>
    )
}

export default About;