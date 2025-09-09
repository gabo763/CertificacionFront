import foto from '../images/foto.jpg';

function Index() {
  return (
    <section id="inicio" className="flex items-center">
      <img
        src={foto}
        alt="Foto personal"
        className="w-60 h-60 object-cover rounded-full mr-8"
      />
      <div>
        <h1 className="text-3xl font-bold">Bienvenido a mi sitio personal</h1>
        <p className="mt-2 text-gray-700">
          Aquí encontrarás información sobre mi perfil profesional.
        </p>
      </div>
    </section>
  );
}

export default Index;
