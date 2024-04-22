
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About.js";
import Resume from"./components/Resume.js";
import Footer from "./components/Footer.js";
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="*" element={<Navigate to="/Resume"/>} />
          
        </Routes>
        <Footer/>
      </div>
    
    
  );
}

export default App;
