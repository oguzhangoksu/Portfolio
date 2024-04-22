import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/style.css';
import image1 from '../assets/raspberry-pi.png';
import image2 from '../assets/DHT11.png';
import image3 from '../assets/mazesolver2.png';


function Projects() {

    return (
        <section >
      <Container fluid className="background-image">
        <Container fluid className="projetcs-content">
            <Container className='project-shader'>
                <div className='row'>
                    <div className='col-lg-4' > 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={image3} className='projects-image'/>
                            <Card.Body className='projects-font'>
                                <Card.Title>Card Title</Card.Title>
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
                    <div className='col-lg-4'> 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={image1} className='projects-image'/>
                            <Card.Body className='projects-font'>
                                <Card.Title>Card Title</Card.Title>
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
                    <div className='col-lg-4'> 
                        <Card className='projects-card'>
                            <Card.Img variant="top" src={image2} className='projects-image' />
                            <Card.Body className='projects-font'>
                                <Card.Title>Card Title</Card.Title>
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

