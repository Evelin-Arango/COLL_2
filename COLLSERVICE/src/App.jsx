import React, { useState, useEffect } from 'react';
import Login from "./pages/login.jsx";
import Registro from "./pages/registro.jsx";
 


import Servicios from './pages/servicios.jsx';
import RegistroCliente from './pages/recliente.jsx';

// Componente para Términos y Condiciones
const TerminosYCondiciones = () => (
  <section style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
    <h2 style={{ color: '#4c3575', marginBottom: '20px' }}>Términos y Condiciones</h2>
    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.5' }}>
      Somos una plataforma que conecta empleadores con empleados, pero no intervenimos ni asumimos responsabilidad en los contratos, acuerdos laborales ni en la gestión directa de los servicios.
    </p>
    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.5' }}>
      No nos hacemos responsables por pérdida, daño o cualquier inconveniente que pueda surgir durante la prestación del servicio contratado entre las partes.
    </p>
    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.5' }}>
      Al utilizar esta plataforma, aceptas que cualquier relación contractual es exclusivamente entre el empleador y el empleado.
    </p>
  </section>
);


// Componente para Contacto
const Contacto = () => (
  <section style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
    <h2 style={{ color: '#4c3575', marginBottom: '20px' }}>Contáctanos</h2>
    <div style={{ fontSize: '16px', color: '#333', lineHeight: '1.5' }}>
      <p><strong>Empresa:</strong> COLSERVICE</p>
      <p><strong>Contacto:</strong> Evelin Arango</p>

      <p>
        <strong>Correo (Soporte):</strong> 
        <a href="mailto:support@collservice.com" style={{ color: '#4c3575', textDecoration: 'underline', marginLeft: '4px' }}>
          support@collservice.com
        </a>
      </p>

      <p>
        <strong>Correo (Ventas):</strong> 
        <a href="mailto:ventas@collservice.com" style={{ color: '#4c3575', textDecoration: 'underline', marginLeft: '4px' }}>
          ventas@collservice.com
        </a>
      </p>

      <p>
        <strong>Teléfono:</strong> +57 301 456 7890
      </p>

      <p>
        <strong>WhatsApp:</strong> 
        <a href="https://wa.me/573014567890" style={{ color: '#4c3575', textDecoration: 'underline' }}>
          +57 301 456 7890
        </a>
      </p>
    </div>
  </section>
);

// Componente para Nosotros
const Nosotros = () => (
  <section style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
    <h2 style={{ color: '#4c3575', marginBottom: '20px' }}>Nosotros</h2>
    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.5' }}>
      Somos una plataforma que conecta empleadores con empleados, pero no intervenimos ni asumimos responsabilidad en los contratos, acuerdos laborales ni en la gestión directa de los servicios.
    </p>
    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.5' }}>
      No nos hacemos responsables por pérdida, daño o cualquier inconveniente que pueda surgir durante la prestación del servicio contratado entre las partes.
    </p>
    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.5' }}>
      Al utilizar esta plataforma, aceptas que cualquier relación contractual es exclusivamente entre el empleador y el empleado.
    </p>
  </section>
);





  







    
        
    

       
      
      
      
         
      
  
     

 













 
      
 
  







  
      



const App = () => {
  const [view, setView] = useState("inicio");
  const [isMobile, setIsMobile] = useState(false);

  // Estilos base
  const headerStyle = {
    background: 'linear-gradient(90deg, #fbc2eb, #4c3575)',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 30px',
    flexWrap: 'wrap',  // Para que se adapte en móviles
  };

  const logoStyle = { fontSize: '22px', fontWeight: 'bold', marginBottom: '8px' };
  
  const menuStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '25px',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',  // Para que baje en pantallas pequeñas
  };
  
  const menuLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: '500',
    transition: 'color 0.3s',
    cursor: 'pointer',
  };
  
  const accionesStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap', // Ajuste para móviles
    marginTop: '8px',
  };
  
  const inputStyle = {
    padding: '6px 12px',
    borderRadius: '20px',
    border: '1px solid #ddd',
    fontSize: '14px',
    minWidth: '150px',
    flexGrow: 1,
  };
  
  const buscarBtnStyle = {
    background: '#ff69b4',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '20px',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bold',
    flexShrink: 0,
  };
  
  const btnStyle = {
    background: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    color: '#333',
    transition: 'background 0.3s',
    flexShrink: 0,
  };
  
  const bienvenidaStyle = {
    textAlign: 'center',
    margin: '50px auto 30px',
    padding: '0 15px',
  };
  
  const bienvenidaH1Style = { fontSize: '30px', color: '#e76bb2', marginBottom: '15px' };
  
  const bienvenidaPStyle = {
    fontSize: '16px',
    background: '#f1f2f7',
    display: 'inline-block',
    padding: '10px 18px',
    borderRadius: '10px',
    color: '#444',
    maxWidth: '600px',
  };
  
  const descripcionStyle = {
    maxWidth: '850px',
    margin: '0 auto 50px',
    background: 'white',
    padding: '25px 30px',
    borderRadius: '16px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };
  
  const descripcionPStyle = { marginBottom: '20px', fontSize: '15px', color: '#555' };
  
  const razonesH3Style = {
    fontSize: '18px',
    color: '#333',
    marginBottom: '15px',
    fontWeight: 'bold',
  };
  
  const opcionesStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap', // para que los tags bajen de línea si es necesario
    marginTop: '10px',
  };
  
  const tagStyle = {
    background: 'linear-gradient(90deg, #fbc2eb, #4c3575)',
    color: 'white',
    padding: '8px 14px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
    whiteSpace: 'nowrap',
  };

  // Estilos footer y sección términos
  const footerStyle = {
    background: 'linear-gradient(90deg, #fbc2eb, #4c3575)',
    color: 'white',
    padding: '30px 20px',
    textAlign: 'center',
    marginTop: '60px',
  };

  const terminosStyle = {
    marginBottom: '12px',
    fontSize: '14px',
  };

  const terminosLinkStyle = {
    color: 'white',
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  // Media query para estilos responsive
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileMenuStyle = isMobile ? {
    flexDirection: 'column',
    gap: '12px',
  } : {};

  const mobileHeaderStyle = isMobile ? {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '14px 20px',
  } : {};

  const mobileAccionesStyle = isMobile ? {
    width: '100%',
    justifyContent: 'flex-start',
  } : {};

  const mobileInputStyle = isMobile ? {
    minWidth: '100%',
    marginBottom: '8px',
  } : {};

  // Función para renderizar según vista
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
      

      case "terminos":
        return <TerminosYCondiciones />;
      case "recliente":  // Vista para RegistroCliente
        return <RegistroCliente />;
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
      <header style={{ ...headerStyle, ...mobileHeaderStyle }}>
        <img src="/logo.png.png" alt="Coll Service Logo" style={{ height: '100px', marginBottom: isMobile ? '12px' : 0 }} />
        <ul style={{ ...menuStyle, ...mobileMenuStyle }}>
          <li><a style={menuLinkStyle} onClick={() => setView("inicio")}>Inicio</a></li>
          <li><a style={menuLinkStyle} onClick={() => setView("servicios")}>Servicios</a></li>
        
         
         
        </ul>
        <div style={{ ...accionesStyle, ...mobileAccionesStyle }}>
          <button style={btnStyle} onClick={() => setView("login")}>Iniciar sesión</button>
          <button style={btnStyle} onClick={() => setView("registro")}>Registro Empleado</button>
          <button style={btnStyle} onClick={() => setView("recliente")}>Registro Cliente</button> {/* Botón para vista RegistroCliente */}
          <input type="text" placeholder="Buscar Perfiles..." style={{ ...inputStyle, ...mobileInputStyle }} />
          <button 
  style={buscarBtnStyle}
  onClick={() => {
    setView("perfiles");
    // Puedes agregar lógica de búsqueda más adelante
  }}
>
  🔍
</button>
        </div>
      </header>

      <main>
        {renderView()}
      </main>
<footer style={footerStyle}>
  <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '900px', margin: '0 auto', flexWrap: 'wrap', gap: '20px' }}>
    {/* Términos y Condiciones */}
    <div style={{ flex: '1 1 200px', fontSize: '14px', marginBottom: '10px' }}>
      <a
        href="#"
        style={terminosLinkStyle}
        onClick={(e) => {
          e.preventDefault();
          setView("terminos");
        }}
      >
        Términos y Condiciones
      </a>
    </div>

    {/* Contacto */}
    <div style={{ flex: '1 1 200px', fontSize: '14px', marginBottom: '10px' }}>
      <a
        href="#"
        style={terminosLinkStyle}  // usa el estilo que ya tienes para links
        onClick={(e) => {
          e.preventDefault();
          setView("contacto");
        }}
      >
       Contáctanos
      </a>
    </div>
  </div>


    
      

       
     
        
        
   
   
       
      
 



 

    
   

  





  <div style={{ marginTop: '20px', fontWeight: '500', fontSize: '16px', textAlign: 'center' }}>
    © {new Date().getFullYear()} Coll Service. Todos los derechos reservados.
  </div>
</footer>
    </div>   
  );
}
export default App;
