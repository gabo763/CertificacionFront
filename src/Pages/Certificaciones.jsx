import React from 'react'
import { useEffect, useState } from "react";

export default function Certificaciones() {

  return (
 <div>
            <div>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mt-4">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Nombre</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Descripcion</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    </tbody>
                </table>
            </div>
        </div>
  )
}
