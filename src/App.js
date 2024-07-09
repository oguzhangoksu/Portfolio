
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About.js";
import Resume from"./components/Resume.js";
import Footer from "./components/Footer.js";
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import {
  Route,
  Routes,

} from "react-router-dom";

function App() {
  return (
      <HashRouter>
      <div className="App">
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          
          
        </Routes>
        <Footer/>
      </div>
      </HashRouter>
    
    
  );
}

export default App;
