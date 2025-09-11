import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools, FaCloud } from "react-icons/fa";

const knowledgeData = [
  {
    category: 'Frontend',
    icon: <FaCode className="text-blue-500 text-3xl mb-2" />,
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js', 'Responsive Design', 'Accesibilidad']
  },
  {
    category: 'Backend',
    icon: <FaServer className="text-green-500 text-3xl mb-2" />,
    items: ['C# (.NET)', 'Node.js', 'Laravel (PHP)', 'APIs REST', 'Validaciones', 'Autenticación']
  },
  {
    category: 'Bases de Datos',
    icon: <FaDatabase className="text-yellow-500 text-3xl mb-2" />,
    items: ['SQL Server', 'Procedimientos almacenados', 'Vistas', 'Normalización', 'Índices']
  },
  {
    category: 'DevOps',
    icon: <FaTools className="text-indigo-500 text-3xl mb-2" />,
    items: ['Git', 'Git Flow', 'GitKraken', 'Azure DevOps', 'CI/CD']
  },
  {
    category: 'Servidores',
    icon: <FaCloud className="text-purple-500 text-3xl mb-2" />,
    items: ['AWS', 'Linux (Ubuntu, CentOS)', 'Windows Server', 'Seguridad básica']
  },
];

const KnowledgeSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900" id="conocimientos">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">Conocimientos Técnicos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {knowledgeData.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            {section.icon}
            <h3 className="text-xl font-semibold mb-4 text-blue-600">{section.category}</h3>
            <ul className="list-disc list-inside space-y-2 w-full">
              {section.items.map((item, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-200">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeSection;