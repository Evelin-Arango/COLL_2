export default function Contacto() {
  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Contáctanos</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nombre" className="border p-2 rounded" />
        <input type="email" placeholder="Correo" className="border p-2 rounded" />
        <textarea placeholder="Mensaje" className="border p-2 rounded"></textarea>
        <button className="bg-purple-500 text-white py-2 rounded">Enviar</button>
      </form>
    </section>
  );
}
