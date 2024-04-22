
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About.js";
import Resume from"./components/Resume.js";
import Footer from "./components/Footer.js";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Resume" element={<Home/>} />
          <Route path="/Resume/about" element={<About/>} />
          <Route path="/Resume/project" element={<Projects/>} />
          <Route path="/Resume/resume" element={<Resume/>} />
          <Route path="*" element={<Navigate to="/Resume"/>} />
          
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
