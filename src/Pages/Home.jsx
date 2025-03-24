import React from 'react'
import Card from '../Components/Card'
import DatosMenu from '../assets/Datos/Datos.js'
import Logo from './../assets/ICEMexico.png'


export default function Home() {
  return (
    <div>
      <div className="cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {DatosMenu.map((registro) => (
          <Card key={registro.id} titulo={registro.titulo} ruta={registro.ruta}/>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <img
          alt="Your Company"
          src={Logo}
        />
      </div>
    </div>
  )
}
