import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeAdmin.css";

const HomeAdmin = () => {
  const navigate = useNavigate();

  const botones = [
    { nombre: 'Caños', ruta: '/canos', img: '/img/Canos.jpg' },
    { nombre: 'Productos', ruta: '/productos', img: '/img/Productos.jpg' },
    { nombre: 'Scrap', ruta: '/scrap', img: '/img/Scrap.jpg' },
    { nombre: 'Orden de Producción', ruta: '/orden-produccion', img: '/img/OrdenProduccion.jpg' },
    { nombre: 'Orden de Trabajo', ruta: '/orden-trabajo', img: '/img/OrdenTrabajo.jpg' },
    { nombre: 'Reportes', ruta: '/reportes-seleccion', img: '/img/Reportes.png' }
  ];

  const handleClick = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <img src="/img/logo.png" alt="Logo de Bisys" className="logo" />
        </div>

        <div className="header-center">
          <h1>Bicicletas Enrique</h1>
        </div>

        <div className="header-right">
          <nav className="nav home">
            <ul>
              <li onClick={() => navigate('/GestionDeUsuarios')}>GESTIÓN DE USUARIOS</li>
            </ul>
          </nav>

          
        </div>
      </header>

      <main>
        <h2 className="subtitle">Home</h2>
        <section className="botones-container">
          <div className="grupo-de-botones">
            {botones.slice(0, 3).map((boton, index) => (
              <div key={index} className="boton" onClick={() => handleClick(boton.ruta)}>
                <img src={boton.img} alt={boton.nombre} className="imagen-home" />
                <span className="boton-label">{boton.nombre}</span>
              </div>
            ))}
          </div>
          <div className="grupo-de-botones">
            {botones.slice(3, 6).map((boton, index) => (
              <div key={index} className="boton" onClick={() => handleClick(boton.ruta)}>
                <img src={boton.img} alt={boton.nombre} className="imagen-home" />
                <span className="boton-label">{boton.nombre}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  );
};

export default HomeAdmin;
