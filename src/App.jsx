import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Estudiante from './Pages/Estudiante';
import Registros from './Pages/Registros';
import Evaluaciones from './Pages/Evaluaciones';
import Certificaciones from './Pages/Certificaciones';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Estudiante" element={<Estudiante />} />
      <Route path="/Registros" element={<Registros />} />
      <Route path="/Evaluaciones" element={<Evaluaciones />} />
      <Route path="/Certificaciones" element={<Certificaciones />} />

    </Routes>
  </div>
  )
}

export default App
