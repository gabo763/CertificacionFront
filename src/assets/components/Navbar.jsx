import React, { useState, useContext } from 'react';
import foto from '../images/ajuste.png';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleConfigMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${theme === "dark" ? "bg-gray-900" : "bg-gray-800"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-lg">Gabriel Flores</a>
          </div>

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Menú principal */}
          <div className="hidden sm:flex space-x-4">
            <a href="#inicio" className="text-gray-300 hover:text-white px-3 py-2">Inicio</a>
            {/* <a href="#sobre-mi" className="text-gray-300 hover:text-white px-3 py-2">Sobre mí</a> */}
            <a href="#experiencia" className="text-gray-300 hover:text-white px-3 py-2">Experiencia</a>
            <a href="#conocimientos" className="text-gray-300 hover:text-white px-3 py-2">Conocimientos</a>
            <a href="#habilidades" className="text-gray-300 hover:text-white px-3 py-2">Habilidades</a>
            <a href="#proyectos" className="text-gray-300 hover:text-white px-3 py-2">Proyectos</a>
            <a href="#educacion" className="text-gray-300 hover:text-white px-3 py-2">Educación</a>{}
            <a href="#contacto" className="text-gray-300 hover:text-white px-3 py-2">Contacto</a>
            <img src={foto} alt="Configuración" className="w-8 h-8 object-cover rounded-full mr-2 cursor-pointer" onClick={toggleConfigMenu}/>          
            {showMenu && (
                <div className="absolute right-0 mt-10 w-32 bg-white dark:bg-gray-800 rounded shadow-lg z-50">
                  <button className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">EN / ES</button>
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={toggleTheme}
                  >
                    Claro / Oscuro
                  </button>
                </div>
              )}
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="sm:hidden mt-2 space-y-2">
            <a href="#inicio" className="block text-gray-300 hover:text-white px-3 py-2">Inicio</a>
            {/* <a href="#sobre-mi" className="block text-gray-300 hover:text-white px-3 py-2">Sobre mí</a> */}
            <a href="#experiencia" className="block text-gray-300 hover:text-white px-3 py-2">Experiencia</a>
            <a href="#conocimientos" className="block text-gray-300 hover:text-white px-3 py-2">Conocimientos</a>
            <a href="#habilidades" className="block text-gray-300 hover:text-white px-3 py-2">Habilidades</a>
            <a href="#proyectos" className="block text-gray-300 hover:text-white px-3 py-2">Proyectos</a>
            <a href="#educacion" className="block text-gray-300 hover:text-white px-3 py-2">Educación</a>
            <a href="#contacto" className="block text-gray-300 hover:text-white px-3 py-2">Contacto</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
