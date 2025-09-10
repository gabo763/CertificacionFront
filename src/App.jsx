import './App.css';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Index from './assets/pages/Index';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Education from './assets/pages/Education';
import Experience from './assets/pages/Experience';
import Skills from './assets/pages/Skills';
import Projects from './assets/pages/Projects';
import Knowledge from './assets/pages/Knowledge';


function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-4">
        <Index />
        <About />
        <Experience />
        <Knowledge />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </>
  );
}
/*
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/knowledge" element={<Knowledge />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}*/

export default App;
