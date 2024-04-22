
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About.js";
import Resume from"./components/Resume.js";
import Footer from "./components/Footer.js";
import {
  Route,
  Routes,

} from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="Resume/" element={<Home/>} />
          <Route path="Resume/about" element={<About/>} />
          <Route path="Resume/project" element={<Projects/>} />
          <Route path="Resume/resume" element={<Resume/>} />
          
          
        </Routes>
        <Footer/>
      </div>
    
    
  );
}

export default App;
