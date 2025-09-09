import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-lg">Gabriel Flores</Link>
          </div>

          {/* Botón hamburguesa */}
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
            <a href="/" className="text-gray-300 hover:text-white px-3 py-2">Inicio</a>
            <a href="/about" className="text-gray-300 hover:text-white px-3 py-2">Sobre mí</a>
            <a href="/experience" className="text-gray-300 hover:text-white px-3 py-2">Experiencia</a>
            <a href="/knowledge" className="text-gray-300 hover:text-white px-3 py-2">Conocimientos</a>
            <a href="/skills" className="text-gray-300 hover:text-white px-3 py-2">Habilidades</a>
            <a href="/projects" className="text-gray-300 hover:text-white px-3 py-2">Proyectos</a>
            <a href="/education" className="text-gray-300 hover:text-white px-3 py-2">Educación</a>
            <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2">Contacto</a>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="sm:hidden mt-2 space-y-2">
            <a href="/" className="block text-gray-300 hover:text-white px-3 py-2">Inicio</a>
            <a href="/about" className="block text-gray-300 hover:text-white px-3 py-2">Sobre mí</a>
            <a href="/experience" className="block text-gray-300 hover:text-white px-3 py-2">Experiencia</a>
            <a href="/knowledge" className="block text-gray-300 hover:text-white px-3 py-2">Conocimientos</a>
            <a href="/skills" className="block text-gray-300 hover:text-white px-3 py-2">Habilidades</a>
            <a href="/projects" className="block text-gray-300 hover:text-white px-3 py-2">Proyectos</a>
            <a href="/education" className="block text-gray-300 hover:text-white px-3 py-2">Educación</a>
            <a href="/contact" className="block text-gray-300 hover:text-white px-3 py-2">Contacto</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
