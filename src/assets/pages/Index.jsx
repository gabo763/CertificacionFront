import foto from '../images/foto.jpg';

function Index() {
  return (
    <section
      id="inicio"
      className="flex flex-col md:flex-row items-center md:items-start  rounded-lg shadow-lg p-6 mt-6"
    >
      <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0">
        <img
          src={foto}
          alt="Foto personal"
          className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-gray-300 shadow-md"
        />
      </div>
      <div className="w-full md:w-3/4 flex flex-col justify-center md:pl-10">
        <h1 className="text-4xl font-extrabold text-Black mb-1">Gabriel Flores Caracheo</h1>
        <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
          Ing. Tecnologias de la Informacion y Comunicaciones.
        </h2>
        <section id="sobre-mi" className="mt-4">
          <h3 className="text-gray-900 leading-relaxed font-bold">
            Soy un desarrollador Full Stack especializado en C# (.NET), Laravel, Node.js y React.js. Me apasiona crear soluciones eficientes y escalables, integrando APIs REST y microservicios. Trabajo con bases de datos SQL Server y despliego aplicaciones en entornos AWS y servidores Linux/Windows. Me destaco por mi liderazgo, comunicación asertiva y compromiso con los objetivos técnicos.
          </h3>
        </section>
      </div>
    </section>
  );
}

export default Index;