import React from 'react';


const knowledgeData = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js', 'Responsive Design', 'Accesibilidad']
  },
  {
    category: 'Backend',
    items: ['C# (.NET)', 'Node.js', 'Laravel (PHP)', 'APIs REST', 'Validaciones', 'Autenticación']
  },
  {
    category: 'Bases de Datos',
    items: ['SQL Server', 'Procedimientos almacenados', 'Vistas', 'Normalización', 'Índices']
  },
  {
    category: 'DevOps',
    items: ['Git', 'Git Flow', 'GitKraken', 'Azure DevOps', 'CI/CD']
  },
  {
    category: 'Servidores',
    items: ['AWS', 'Linux (Ubuntu, CentOS)', 'Windows Server', 'Seguridad básica']
  },
];

const KnowledgeSection = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Conocimientos Técnicos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {knowledgeData.map((section, index) => (
          <div key={index} className={`rounded-lg shadow-md p-6 ${section.color}`}>
            <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
            <ul className="list-disc list-inside space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeSection;
