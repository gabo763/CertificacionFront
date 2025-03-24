import React from 'react';
import { DataTable } from "simple-datatables";
import "simple-datatables/dist/style.css";
import { useEffect, useState } from "react";
import ModalEstuadiante from '../Modal/ModalEstuadiante';



export default function Estudiante() {
    const [estudiantes, setEstudiantes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchEstudiantes = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch('http://127.0.0.1:8000/estudiantes', {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Debug': 'React Request'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setEstudiantes(data);
                console.log('Headers de respuesta:', response.headers);
                console.log('Datos recibidos:', data);
            } catch (error) {
                setError(error.message);
                console.error('Error completo:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEstudiantes();
    }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };




    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-blue-600 font-bold">
                    Cargando estudiantes...
                </div>
            </div>
        );
    }


    return (
        <div>
            {isModalOpen && <ModalEstuadiante closeModal={closeModal} />}

            <div>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mt-4">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Nombre</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Correo</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {estudiantes.map((estudiante, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-6 py-4 text-gray-800">{estudiante.nombre}</td>
                                <td className="px-6 py-4 text-gray-800">{estudiante.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}