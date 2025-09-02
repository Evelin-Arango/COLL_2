import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del login:", form);
  };

  return (
    <>
      <style>{`
        /* Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Segoe UI", Arial, sans-serif;
          background-color: #f6f5fc;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .login-container {
          background: white;
          padding: 35px 40px;
          border-radius: 16px;
          box-shadow: 0 6px 12px rgba(0,0,0,0.1);
          width: 380px;
          text-align: center;
          border-top: 6px solid #e76bb2;
        }

        .login-container h2 {
          margin-bottom: 20px;
          color: #e76bb2;
          font-size: 26px;
          font-weight: bold;
        }

        .input-group {
          margin-bottom: 18px;
          text-align: left;
        }

        .input-group label {
          display: block;
          font-size: 14px;
          margin-bottom: 6px;
          color: #444;
        }

        .input-group input {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 14px;
          transition: border 0.3s;
        }

        .input-group input:focus {
          border-color: #a18cd1;
          outline: none;
        }

        .btn-login {
          width: 100%;
          padding: 12px;
          background: linear-gradient(90deg, #fbc2eb, #a18cd1);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
          transition: opacity 0.3s;
        }

        .btn-login:hover {
          opacity: 0.9;
        }

        .extra {
          margin-top: 20px;
          font-size: 14px;
          color: #555;
        }

        .extra a {
          color: #e76bb2;
          text-decoration: none;
          font-weight: bold;
        }

        .extra a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>

        <div className="extra">
          ¿No tienes cuenta? <a href="#">Regístrate</a>
        </div>
      </div>
    </>
  );
}