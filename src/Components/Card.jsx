import React from 'react'



export default function Card({ titulo , ruta}) {
  return (
<div>
    <div className="max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <a href={ruta}>
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">{titulo}</h5>
        </a>
    </div>
</div>

  )
}
