export default function Servicios() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
      <p className="mb-6">
        Ofrecemos limpieza de hogares, oficinas, organización de espacios y
        mantenimiento general.
      </p>
      <ul className="grid grid-cols-2 gap-4">
        <li className="bg-pink-100 p-4 rounded shadow">Limpieza doméstica</li>
        <li className="bg-pink-100 p-4 rounded shadow">Oficinas y empresas</li>
        <li className="bg-pink-100 p-4 rounded shadow">Organización de espacios</li>
        <li className="bg-pink-100 p-4 rounded shadow">Mantenimiento básico</li>
      </ul>
    </section>
  );
}
