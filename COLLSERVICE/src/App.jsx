import React, { useState } from 'react';
import Login from "./pages/login.jsx";
import Registro from "./pages/registro.jsx";
import Perfiles from './pages/perfiles.jsx';  
import Nosotros from './pages/nosotros.jsx';
import Contacto from './pages/contacto.jsx';
import Servicios from './pages/servicios.jsx';

const App = () => {
  const [view, setView] = useState("inicio"); // Estado para manejar la vista actual

  const headerStyle = {
    background: 'linear-gradient(90deg, #fbc2eb, #4c3575)',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 30px',
  };

  const logoStyle = { fontSize: '22px', fontWeight: 'bold' };
  const menuStyle = { listStyle: 'none', display: 'flex', gap: '25px', margin: 0, padding: 0 };
  const menuLinkStyle = { textDecoration: 'none', color: 'white', fontWeight: '500', transition: 'color 0.3s' };
  const accionesStyle = { display: 'flex', alignItems: 'center', gap: '6px' };
  const inputStyle = { padding: '6px 12px', borderRadius: '20px', border: '1px solid #ddd', fontSize: '14px' };
  const buscarBtnStyle = { background: '#ff69b4', border: 'none', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', color: 'white', fontWeight: 'bold' };
  const btnStyle = { background: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', color: '#333', transition: 'background 0.3s' };
  const bienvenidaStyle = { textAlign: 'center', margin: '50px auto 30px' };
  const bienvenidaH1Style = { fontSize: '30px', color: '#e76bb2', marginBottom: '15px' };
  const bienvenidaPStyle = { fontSize: '16px', background: '#f1f2f7', display: 'inline-block', padding: '10px 18px', borderRadius: '10px', color: '#444' };
  const descripcionStyle = { maxWidth: '850px', margin: '0 auto 50px', background: 'white', padding: '25px 30px', borderRadius: '16px', boxShadow: '0 6px 12px rgba(0,0,0,0.1)', textAlign: 'center' };
  const descripcionPStyle = { marginBottom: '20px', fontSize: '15px', color: '#555' };
  const razonesH3Style = { fontSize: '18px', color: '#333', marginBottom: '15px', fontWeight: 'bold' };
  const opcionesStyle = { display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' };
  const tagStyle = { background: 'linear-gradient(90deg, #fbc2eb, #4c3575)', color: 'white', padding: '8px 14px', borderRadius: '20px', fontSize: '14px', fontWeight: '500', boxShadow: '0 3px 6px rgba(0,0,0,0.1)' };

  // Función para renderizar la vista actual
  const renderView = () => {
    switch (view) {
      case "login":
        return <Login />;
      case "registro":
        return <Registro />;
      case "servicios":
        return <Servicios />;
      case "nosotros":
        return <Nosotros />;
      case "contacto":
        return <Contacto />;
      case "perfiles":
        return <Perfiles />;
      default:
        return (
          <>
            <section style={bienvenidaStyle}>
              <h1 style={bienvenidaH1Style}>Bienvenido a Coll Service</h1>
              <p style={bienvenidaPStyle}>
                Tu tranquilidad y limpieza en manos expertas. ¡Confía en nosotros para tu hogar u oficina!
              </p>
            </section>
            <section style={descripcionStyle}>
              <p style={descripcionPStyle}>
                En Coll Service ofrecemos servicios profesionales de aseo doméstico para hogares y oficinas.
                Nuestro equipo está capacitado para brindar limpieza, organización y confianza en cada visita.
              </p>
              <div style={{ textAlign: 'center' }}>
                <h3 style={razonesH3Style}>¿Por qué elegirnos?</h3>
                <div style={opcionesStyle}>
                  <span style={tagStyle}>Personal confiable y verificado</span>
                  <span style={tagStyle}>Atención personalizada</span>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div style={{ fontFamily: '"Segoe UI", Arial, sans-serif', backgroundColor: '#f6f5fc', color: '#333', lineHeight: '1.5' }}>
      <header style={headerStyle}>
        <img src="/logo.png.png" alt="Coll Service Logo" style={{ height: '100px' }} />
        <ul style={menuStyle}>
          <li><a href="#" style={menuLinkStyle} onClick={() => setView("inicio")}>Inicio</a></li>
          <li><a href="#" style={menuLinkStyle} onClick={() => setView("servicios")}>Servicios</a></li>
          <li><a href="#" style={menuLinkStyle} onClick={() => setView("nosotros")}>Nosotros</a></li>
          <li><a href="#" style={menuLinkStyle} onClick={() => setView("contacto")}>Contacto</a></li>
          <li><a href="#" style={menuLinkStyle} onClick={() => setView("perfiles")}>Perfiles</a></li>
        </ul>
        <div style={accionesStyle}>
          <button style={btnStyle} onClick={() => setView("login")}>Iniciar sesión</button>
          <button style={btnStyle} onClick={() => setView("registro")}>Registrarse</button>
          <input type="text" placeholder="Buscar Perfiles..." style={inputStyle} />
          <button style={buscarBtnStyle}>🔍</button>
        </div>
      </header>

      <main>
        {renderView()}
      </main>
    </div>
  );
};

export default App;
