export default function Perfiles() {
  const perfiles = [
    { nombre: "Ana Gómez", especialidad: "Limpieza de oficinas" },
    { nombre: "Carlos López", especialidad: "Mantenimiento general" },
    { nombre: "María Rodríguez", especialidad: "Organización de espacios" },
  ];

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {perfiles.map((p, i) => (
          <div key={i} className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-bold">{p.nombre}</h3>
            <p className="text-gray-600">{p.especialidad}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
