
import './css/App.css';
import{useState} from 'react';
import{Link,Route,Routes} from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from'./Contact';
function App() {


  return (
    <>
      <Routes>
        <Route  path='/Resume/' element={<About />}/>
        <Route  path='/Resume/Projects' element={<Projects/>}/>
        <Route  path='/Resume/Contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
