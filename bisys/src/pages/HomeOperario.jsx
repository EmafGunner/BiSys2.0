import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeAdmin.css";

const HomeOperario = () => {
  const navigate = useNavigate();

  const boton = {
    nombre: 'Orden de Trabajo',
    ruta: '/orden-trabajo',
    img: '/img/OrdenTrabajo.jpg'
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
      </header>

      <main>
        <h2 className="subtitle">Home</h2>
        <section className="botones-container">
          <div className="grupo-de-botones">
            <div className="boton" onClick={() => navigate(boton.ruta)}>
              <img src={boton.img} alt={boton.nombre} className="imagen-home" />
              <span className="boton-label">{boton.nombre}</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  );
};

export default HomeOperario;
