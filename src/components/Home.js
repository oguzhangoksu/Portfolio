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
                <p className='font-family'>As a recent graduate of Antalya Bilim University with a degree in Computer Engineering, I am proud to have completed my studies with high honors, ranking third in both my faculty and department. Throughout my academic journey, I have cultivated a robust understanding of the hardware and software aspects of computing. My programming expertise spans several languages, including C++/C, Java, Python, and JavaScript. Additionally, I have gained practical experience in digital circuit design and embedded systems.
During my graduation project, I acquired experience in AI model training using TensorFlow, further solidifying my skills in machine learning and artificial intelligence. Beyond my academic pursuits, I have applied my skills in professional settings, working with React, JavaScript, MySQL, Django and Node.js during my internship. I am also actively engaged in independent projects that further hone my abilities and expand my knowledge base. My dedication to continuous learning and passion for innovation drives me to excel in the dynamic field of computer engineering.
</p>
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