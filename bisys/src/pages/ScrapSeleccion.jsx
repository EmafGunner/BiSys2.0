import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeAdmin.css";
import "./ScrapSeleccion.css";

const ScrapSeleccion = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <img
            src="/img/logo.png"
            alt="Logo de Bisys"
            className="logo"
            onClick={() => navigate('/admin')}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="header-center">
          <h1>Bicicletas Enrique</h1>
        </div>
        <div className="header-right">
          <nav className="nav home">
            <ul>

              <li onClick={() => navigate('/admin')}>HOME</li>
              <li>GESTIÓN DE USUARIOS</li>

            </ul>
          </nav>
        </div>
      </header>

      <main className="scrap-main">
        <h2 className="subtitle">Seleccione el módulo de Scrap</h2>
        <div className="scrap-opciones">
          <div className="scrap-card" onClick={() => navigate("/scrap-canos")}>SCRAP CAÑOS</div>
          <div className="scrap-card" onClick={() => navigate("/scrap-productos")}>SCRAP PRODUCTOS</div>
        </div>
      </main>

      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  );
};

export default ScrapSeleccion;
