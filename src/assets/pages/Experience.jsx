import logoIBT from "../images/logo_ibt.jpg";
import logoBeta from "../images/logo_beta.png";

function Experience() {
  return (
    <div className="max-w-5xl mx-auto mt-10" id="experiencia">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Experiencia</h1>

      <section className="flex flex-col md:flex-row items-center rounded-lg shadow-lg p-8 mb-8">
        <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={logoBeta}
            alt="Logo Beta Procesos"
            className="w-32 h-32 md:w-40 md:h-40 object-contain border-4 border-gray-200 shadow-md bg-white rounded-full"
          />
        </div>
        <div className="w-full md:w-3/4 flex flex-col justify-center md:pl-10">
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Beta Procesos SA de CV</h3>
          <p className="text-sm text-gray-500 mb-2">Julio 2024 – Presente | Celaya, Guanajuato</p>
          <p className="text-gray-700 leading-relaxed">
            Desarrollo full stack con C# y .NET, integración con Epicor Kinetic, creación de apps móviles con MAUI, gestión de bases de datos SQL Server, despliegues en Windows Server y DevOps con Azure.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center  rounded-lg shadow-lg p-8 mb-8">
        <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={logoIBT}
            alt="Logo IBT"
            className="w-32 h-32 md:w-40 md:h-40 object-contain border-4 border-gray-200 shadow-md bg-white rounded-full"
          />
        </div>
        <div className="w-full md:w-3/4 flex flex-col justify-center md:pl-10">
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Innova Business Technology</h3>
          <p className="text-sm text-gray-500 mb-2">Diciembre 2022 – Julio 2024 | Celaya, Guanajuato</p>
          <p className="text-gray-700 leading-relaxed">
            Desarrollo de ERP con Laravel, PHP y jQuery, microservicios con Node.js y React.js, liderazgo técnico, DevOps en AWS, gestión de servidores Linux y control de versiones con GitKraken.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Experience;