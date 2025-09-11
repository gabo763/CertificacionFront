import { FaUsers, FaComments, FaLaptopCode, FaRegCheckCircle, FaSyncAlt, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";

function Skills() {
  return (
    <section id="habilidades" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Habilidades</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Habilidades Blandas */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Blandas</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2"><FaUsers /> Trabajo en equipo</li>
              <li className="flex items-center gap-2"><FaComments /> Comunicación asertiva</li>
              <li className="flex items-center gap-2"><FaLaptopCode /> Liderazgo técnico</li>
              <li className="flex items-center gap-2"><FaRegCheckCircle /> Responsabilidad y compromiso</li>
              <li className="flex items-center gap-2"><FaSyncAlt /> Adaptabilidad</li>
              <li className="flex items-center gap-2"><FaRegCheckCircle /> Resolución de problemas</li>
              <li className="flex items-center gap-2"><FaUsers /> Empatía</li>
              <li className="flex items-center gap-2"><FaComments /> Escucha activa</li>
            </ul>
          </div>
          {/* Habilidades Técnicas */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Técnicas</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2"><FaReact /> React.js</li>
              <li className="flex items-center gap-2"><FaJs /> JavaScript (ES6+)</li>
              <li className="flex items-center gap-2"><FaHtml5 /> HTML5</li>
              <li className="flex items-center gap-2"><FaCss3Alt /> CSS3 / Tailwind CSS</li>
              <li className="flex items-center gap-2"><FaNodeJs /> Node.js</li>
              <li className="flex items-center gap-2"><FaRegCheckCircle /> Git & GitHub</li>
              <li className="flex items-center gap-2"><FaRegCheckCircle /> Consumo de APIs REST</li>
              <li className="flex items-center gap-2"><FaRegCheckCircle /> Testing básico</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
