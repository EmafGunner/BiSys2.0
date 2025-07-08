import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeAdmin.css';
import './ReportesSeleccion.css';

const ReportesSeleccion = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <img
            src="/img/logo.png"
            alt="Logo de Bisys"
            className="logo"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="header-center">
          <h1>Bicicletas Enrique</h1>
        </div>
        <div className="header-right">
          <nav className="nav home">
            <ul>
              <li onClick={() => navigate('/')}>HOME</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="reportes-main">
        <h2 className="subtitle">Seleccione el módulo de Reportes</h2>
        <div className="reportes-opciones">
          <div className="reportes-card" onClick={() => navigate('/reportes-disponibles')}>REPORTES DISPONIBLES
          </div>
          <div className="reportes-card" onClick={() => navigate('/reportes-generados')}>REPORTES GENERADOS
          </div>
        </div>
      </main>

      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  );
};

export default ReportesSeleccion;
