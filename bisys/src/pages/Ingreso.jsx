import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className="inicio-container">
      <div className="overlay">
        <h2 className="bienvenida">Bienvenido a</h2>
        <div className="logo-central">
          <img src="/img/logo.png" alt="Logo BISYS" />
        </div>
        <button className="btn-entrar" onClick={() => navigate('/login')}>
          Entrar
        </button>
      </div>
      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  );
};

export default Inicio;
