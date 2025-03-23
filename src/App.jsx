import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  )
}

export default App
