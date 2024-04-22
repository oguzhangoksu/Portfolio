import Container from 'react-bootstrap/esm/Container';
import image1 from '../assets/working4-removebg.png';
import image2 from '../assets/work5-preview.png';
import Image from 'react-bootstrap/Image';
import '../styles/style.css';
import HomeFont from './HomeFont';

function Home() {
  return (
    <section >
      <Container fluid className="background-image">
        <Container fluid className="home-content">
          <div className="row" >
            
            <div className="col-lg-6 font-home">
                <Image  src={image1} alt="home" className="photo" fluid />
            </div>
            <div className="col-lg-6 font-home" >
              <HomeFont />
            </div>
          </div>
          
        </Container>
        <Container fluid className="home-content">
          <div className="row" >
            <div className="col-lg-6" style={{textAlign:"center"}}>
              <div >
                <p className='font-family' style={{color:"#ff4c38",fontSize:"1.5em"}}>Let Me Introduce My Self</p>
                <p className='font-family'>Currently in my forth year of pursuing a degree in Computer Engineering.Throughout my academic journey in this captivating field, I have developed a comprehensive understanding of both the hardware and software facets of computing. I have refined my programming abilities in languages such as C++, Java, and Python, and also acquired practical knowledge in areas like digital circuit design and embedded systems. Outside of the school, I experienced with React, Javascript and Mysql in my internship.Right now,I be occupied in doing few project on my on.</p>
              </div>
            </div>
            <div className="col-lg-6 font-home">
              <div>
                <Image src={image2} alt="home" className="photo" fluid />
              </div>
            </div>
          </div>
        </Container>

        


      </Container>

   
    </section>
    
  );
}

export default Home;