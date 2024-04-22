import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import "../styles/style.css";
function NavBar() {

    return(
        <Navbar expand="lg" variant="dark" fixed='top' bg='red' >
        <Container >
          <Navbar.Brand href="/home"><img src={logo} className='navbar-logo' width={70} height={70}  ></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav " >
            <Nav className="ms-auto ">
              <Nav.Link href="/"> 
                <div class="bottom-container">
                  <button class="animated-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16" style={{marginRight:"3px",color:"#ff4c38"}}>
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                    </svg>
                  Home
                  </button>
                </div></Nav.Link>
              <Nav.Link href="/about" >
                <div class="bottom-container">
                  <button class="animated-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16" style={{marginRight:"3px",color:"#ff4c38"}}>
                      <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                      About
                  </button>
                </div>
              </Nav.Link>
              <Nav.Link href="/project" >
                <div class="bottom-container">
                  
                  <button class="animated-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-easel-fill" viewBox="0 0 16 16" style={{marginRight:"3px",color:"#ff4c38"}}>
                      <path d="M8.473.337a.5.5 0 0 0-.946 0L6.954 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.85l-1.323 3.837a.5.5 0 1 0 .946.326L4.908 11H7.5v2.5a.5.5 0 0 0 1 0V11h2.592l1.435 4.163a.5.5 0 0 0 .946-.326L12.15 11H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.046z"/>
                    </svg>
                      Projects
                  </button>
                </div>
              </Nav.Link>
              <Nav.Link href="/resume" >
                <div class="bottom-container">
                  <button class="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16" style={{marginRight:"3px",color:"#ff4c38"}}>
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
                  </svg>
                    Resume</button>
                </div>
              </Nav.Link>
              {/*
              <Nav.Link href="/contact" >
                <div class="bottom-container">
                  <button class="animated-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16" style={{marginRight:"3px",color:"#ff4c38"}}>
                      <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
                    </svg>
                    Contact
                  </button>
                </div>
              </Nav.Link>
                */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
}

export default NavBar;