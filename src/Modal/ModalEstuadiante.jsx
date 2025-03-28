import React, { useState } from 'react';

export default function ModalEstuadiante() {
  // Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <div className='flex items-center justify-between mt-4'>
        <button
          className='bg-blue-950 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'
          onClick={openModal} // Abrir el modal al hacer clic
        >
          Crear Nuevo
        </button>
      </div>

      {/* Modal que se mostrará cuando isModalOpen sea true */}
      {isModalOpen && (
        <div 
            id="crud-modal" 
            tabindex="-1" 
            aria-hidden="true" 
            className="overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center w-full h-full "
            >
            <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 ">
                    Crear Nuevo Estudiante
                </h3>
                <button 
                    onClick={closeModal} 
                    type="button" 
                    className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                    <svg 
                    className="w-3 h-3" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 14 14"
                    >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                </div>
                <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="Ingresa el nombre completo" 
                        required
                    />
                    </div>
                    <div className="col-span-2">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="Ingresa el correo electronico" 
                        required
                    />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                    </svg>
                    Guardar
                </button>
                </form>
            </div>
            </div>

      )}
    </div>
  );
}
