function Education() {
  return (
    <section id="educacion" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Educación</h2>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Instituto Tecnológico de Roque</h3>
          <p className="text-gray-700 dark:text-gray-200 text-center mb-2">
            Ing. en Tecnologías de la Información y Comunicaciones
          </p>
          <span className="text-sm text-gray-500 mb-1">Marzo 2024</span>
          <span className="text-sm text-gray-500">Celaya, Guanajuato</span>
        </div>
      </div>
    </section>
  );
}

export default Education;
