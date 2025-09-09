import { useState } from "react";

const RegistroCliente = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "",
    numeroDocumento: "",
    fechaNacimiento: "",
    fechaExpedicion: "",
    direccion: "",
    telefono: "",
    correo: "",
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto") {
      setForm({ ...form, foto: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado con éxito!");
  };

  return (
    <>
      <style>{`
        * {
          margin: 0; padding: 0; box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(180deg, #c5a4f1, #3b057f);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
          padding: 30px;
          color: #222;
        }
        .registro-container {
          background: #f4e6ff;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(59, 5, 127, 0.6);
          width: 380px;
          padding: 30px 25px;
          font-size: 13px;
          color: #4b2879;
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
          font-weight: 600;
          color: #4b2879;
        }
        .input-group {
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
        }
        label {
          font-weight: 600;
          margin-bottom: 4px;
          color: #4b2879;
        }
        input[type="text"],
        input[type="email"],
        input[type="date"],
        select,
        textarea,
        input[type="file"],
        input[type="tel"],
        input[type="number"] {
          padding: 7px 10px;
          border-radius: 5px;
          border: 1px solid #7b68ee;
          font-size: 13px;
          color: #4b2879;
        }
        textarea {
          min-height: 60px;
          resize: vertical;
        }
        .inline-group {
          display: flex;
          gap: 12px;
          margin-bottom: 14px;
        }
        .inline-group > div {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        button {
          padding: 10px 15px;
          background: #6d4ad9;
          border: none;
          border-radius: 6px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          font-size: 14px;
          margin: 8px 5px 0 0;
          flex: 1;
          transition: background 0.3s ease;
        }
        button:hover {
          background: #4b3ab2;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
        }
        .camera-box {
          border: 1.8px solid #7b68ee;
          height: 110px;
          background: #d7b9ff;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #4b2879;
          margin-bottom: 12px;
          font-size: 12px;
          border-radius: 5px;
        }
        img.preview {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 12px;
          object-fit: contain;
          max-height: 110px;
        }
      `}</style>

      <form className="registro-container" onSubmit={handleSubmit}>
        <h2>REGISTRO DE CLIENTE</h2>

        <div className="input-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Tipo de Documento</label>
          <select
            name="tipoDocumento"
            value={form.tipoDocumento}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="cc">Cédula de Ciudadanía</option>
            <option value="ti">Tarjeta de Identidad</option>
            <option value="ce">Cédula de Extranjería</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
        </div>

        <div className="input-group">
          <label>Número de Documento</label>
          <input
            type="text"
            name="numeroDocumento"
            value={form.numeroDocumento}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inline-group">
          <div className="input-group">
            <label>Fecha de Nacimiento</label>
            <input
              type="date"
              name="fechaNacimiento"
              value={form.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Fecha de Expedición</label>
            <input
              type="date"
              name="fechaExpedicion"
              value={form.fechaExpedicion}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Dirección</label>
          <input
            type="text"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Correo</label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Foto Cédula/NIT</label>
          <input
            type="file"
            name="foto"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {form.foto ? (
          <img
            src={URL.createObjectURL(form.foto)}
            alt="Foto Cedula/NIT"
            className="preview"
          />
        ) : (
          <div className="camera-box">Vista previa de la foto aquí</div>
        )}

        <div className="buttons">
          <button
            type="button"
            onClick={() => alert("Regresando...")}
          >
            ATRÁS
          </button>
          <button type="submit">GUARDAR</button>
        </div>
      </form>
    </>
  );
};

export default RegistroCliente;
