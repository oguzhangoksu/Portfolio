import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/style.css';
import image1 from '../assets/raspberry-pi.png';
import image2 from '../assets/DHT11.png';
import image4 from '../assets/PaintSimulation.png';
import image5 from '../assets/embedded.png';
import image6 from '../assets/embedded2.png';
import image7 from '../assets/pet-breed-ai.jpeg';
import gif from '../assets/TermProject.gif';
import gif2 from '../assets/Homework.gif';
import gif3 from '../assets/maze_solver.gif';
import gif4 from '../assets/Peata_gif.gif';


function Projects() {

    return (
        <section >
      <Container fluid className="background-image">
        <Container fluid className="projetcs-content">
            <Container className='project-shader'>
                <div className='row' style={{justifyContent:"center"}}>
                    <div className='col-lg-4' style={{marginBottom:"20px"}}> 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={gif3} className='projects-image'/>
                            <Card.Body className='projects-font' >
                                <Card.Title>Maze Solver</Card.Title>
                                <Card.Text>
                                The purpose of creating this project is to visually demonstrate the functioning of algorithms such as BFS, Dijkstra, and A*, and to learn these algorithms during the development process on designable Maze.
                                </Card.Text>
                                    
                                <Button variant="primary projects-button" onClick={()=>{ window.open("https://github.com/oguzhangoksu/Maze-Solver")}}style={{marginRight:10}}>
                                    Source Code 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg>  
                                </Button>
                                
                                <Button variant="primary projects-button" onClick={()=>{ window.open("https://oguzhangoksu.github.io/Maze-Solver/")}} style={{marginLeft:10}} >
                                    View 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16" >
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                                    </svg>

                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4' style={{marginBottom:"20px"}}> 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={gif4} className='projects-image' />
                            <Card.Body className='projects-font'>
                                <Card.Title>Peata</Card.Title>
                                <Card.Text style={{fontSize:"0.85rem"}}>
                                As a graduation project, we created the Peata Project. The Peata project is a website and mobile app we developed for animal lovers. It allows people to share lost pets or stray animals, view announcements, and alert users in the same city about these announcements. To differentiate our experience, we aimed to integrate artificial intelligence into our site to identify the breeds of stray animals. In this context, React was used for the website, Flutter for the mobile app, and Node.js and Firebase for the backend. The project was built based on the 3-tier architecture model. My role in this project included training the artificial intelligence, writing the server that facilitates communication between the web and mobile apps using Firebase, and creating the website.
                                </Card.Text>
                                    <Button variant="primary projects-button" onClick={()=>{ window.open("https://github.com/oguzhangoksu/Peata")}}>
                                        Source Code of Web Site
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github " viewBox="0 0 16 16" style={{color:"black"}}>
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>  
                                    </Button>
                                    <Button variant="primary projects-button" onClick={()=>{ window.open("https://github.com/oguzhangoksu/Server")}}>
                                        Source Code of Server
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github " viewBox="0 0 16 16" style={{color:"black"}}>
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>  
                                    </Button>
                                    <Button variant="primary projects-button" onClick={()=>{ window.open("https://www.youtube.com/watch?v=KTrtWfZWEWE&ab_channel=o%C4%9Fuzhang%C3%B6ksu")}}>
                                        Demonstration 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                                        </svg>
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4' style={{marginBottom:"20px"}}> 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={image7} className='projects-image' />
                            <Card.Body className='projects-font'>
                                <Card.Title>Animal Breed Detect AI Model</Card.Title>
                                <Card.Text>
                                This model is created to identify pet breeds without utilizing AI trained model under this graduation project. The model can identify 7 different breeds, and it has been confirmed that this can be done with sufficient datasets and processing power. The prediction accuracy has been determined to be 73%. For more detailed information about the model, for get detail, don't forget to check the source code.
                                </Card.Text>
                                    <Button variant="primary projects-button" onClick={()=>{ window.open("https://www.kaggle.com/models/ouzhangksu/breed-recognized-ai/")}}>
                                        Source Code 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github " viewBox="0 0 16 16" style={{color:"black"}}>
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>  
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                   
                    
                </div>

                <div className='row' style={{justifyContent:"center"}}>
                <div className='col-lg-4' style={{marginBottom:"20px"}} > 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={gif} className='projects-image' />
                            <Card.Body className='projects-font'>
                                <Card.Title>Computer Graphics</Card.Title>
                                <Card.Text>
                                This project was developed as part of my CS 451 Computer Graphics course. It utilizes WEBGL technology in JavaScript to create a 3D scene featuring interactive elements and customizable lighting. You can move and rotate objects using various keyboard controls and adjust the lighting settings to see how different intensities and positions affect the scene.
                                </Card.Text>
                                    <Button variant="primary projects-button" onClick={()=>{ window.open("https://github.com/oguzhangoksu/ComputerGraphicsTermProject")}}>
                                        Source Code 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github " viewBox="0 0 16 16" style={{color:"black"}}>
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>  
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4' style={{marginBottom:"20px"}}> 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={gif2} className='projects-image'  />
                            <Card.Body className='projects-font'>
                                <Card.Title>Draw Cube</Card.Title>
                                <Card.Text>
                                In this project, I implemented a cut corner cube using different rendering techniques. The project is developed with JavaScript, CSS, and HTML, showcasing various methods to represent the cube. Users can interact with the cube by rotating, scaling, and translating it, and can switch between different rendering algorithms such as backface culling and painting.
                                </Card.Text>
                                    <Button variant="primary projects-button" onClick={()=>{ window.open("https://github.com/oguzhangoksu/DrawCube")}}>
                                        Source Code 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github " viewBox="0 0 16 16" style={{color:"black"}}>
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>  
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4' style={{marginBottom:"20px"}}> 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={image4} className='projects-image' />
                            <Card.Body className='projects-font'>
                                <Card.Title>Paint Simulation</Card.Title>
                                <Card.Text>
                                In this project, I developed a basic paint-like application using HTML, JavaScript, and CSS. The application allows users to draw various shapes such as points, dots, lines, circles, and ellipses. It employs different algorithms including line segment, DDA, Bresenham, and implicit algorithms for rendering. Additionally, users can perform transformations on the shapes, making it a versatile tool for basic graphic design and algorithm demonstration.
                                </Card.Text>
                                    <Button variant="primary projects-button" onClick={()=>{ window.open("https://github.com/oguzhangoksu/PaintSimulation")}}>
                                        Source Code 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github " viewBox="0 0 16 16" style={{color:"black"}}>
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>  
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='row' style={{justifyContent:"center"}}>
                <div className='col-lg-4' style={{marginBottom:"20px"}}> 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={image5} className='projects-image' />
                            <Card.Body className='projects-font'>
                                <Card.Title>Temperature System</Card.Title>
                                <Card.Text>
                                This project demonstrates the integration of sensors, ADC, microcontroller, LCD, and keypad to create a functional embedded system for temperature monitoring. The system provides real-time temperature readings, user interaction through a keypad, and displays relevant information on an LCD. The project showcases skills in embedded C programming, hardware interfacing, and simulation using Proteus software. I made this project for the Embedded System Design course in my university, and this is my term project.                                </Card.Text>
                                    <Button variant="primary projects-button" onClick={()=>{ window.open("https://github.com/oguzhangoksu/TemperatureSystem")}}>
                                        Source Code 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github " viewBox="0 0 16 16" style={{color:"black"}}>
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>  
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4' style={{marginBottom:"20px"}}> 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={image6} className='projects-image' />
                            <Card.Body className='projects-font'>
                                <Card.Title>Logic Operations</Card.Title>
                                <Card.Text>
                                This project involves designing a microcontroller-based system using an 8051 microcontroller, an LCD display, and a 4x4 keypad. The system performs logical operations (AND, OR, XOR, NOR) on two hexadecimal numbers entered by the user via the keypad and displays the result on the LCD.
                                </Card.Text>
                                    <Button variant="primary projects-button" onClick={()=>{ window.open("https://github.com/oguzhangoksu/LogicOperations")}}>
                                        Source Code 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github " viewBox="0 0 16 16" style={{color:"black"}}>
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>  
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4' style={{marginBottom:"20px"}}> 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={image1} className='projects-image'/>
                            <Card.Body className='projects-font'>
                                <Card.Title>Device Scan</Card.Title>
                                <Card.Text>
                                At the internship location, IoT devices were employed to fulfill Industry 4.0 needs, gathering data from factory automation machinery. Challenges arose, including power outages and unexpected device shutdowns. To address this, the company sought to maintain online status for IoT devices on the same network, requesting live monitoring of metrics like CPU temperature and RAM usage. Subsequently, a project was initiated to meet these demands
                                </Card.Text>
                                    <Button variant="primary projects-button" onClick={()=>{ window.open("https://github.com/oguzhangoksu/Internship-CihazTarama")}}>
                                        Source Code 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github " viewBox="0 0 16 16" style={{color:"black"}}>
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>  
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                   
                    

                </div>
                <div className='row' style={{justifyContent:"center"}}>
                    <div className='col-lg-4' style={{marginBottom:"20px"}}> 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={image2} className='projects-image' />
                            <Card.Body className='projects-font'>
                                <Card.Title>Humidity Temperature</Card.Title>
                                <Card.Text>
                                During my internship, they asked me to develop a project to familiarize myself with the technologies and JavaScript language used. The project involved measuring the ambient humidity and temperature in real-time and displaying them in graphical form. The purpose of the project was to store the data as well.
                                </Card.Text>
                                    <Button variant="primary projects-button" onClick={()=>{ window.open("https://github.com/oguzhangoksu/Reading-Humidity_Temperature")}}>
                                        Source Code 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github " viewBox="0 0 16 16" style={{color:"black"}}>
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>  
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>


            </Container>
        </Container>
      </Container>
    </section>
    )
}

export default Projects;

