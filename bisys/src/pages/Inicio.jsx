// src/pages/Inicio.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Inicio.css';

const Inicio = () => {
  const navigate = useNavigate();

  const handleEntrar = () => {
    // En el futuro esto redirigirá por tipo de usuario:
    // const userType = 'admin'; // 'operario', 'encargado'
    // switch (userType) {
    //   case 'admin':
    //     navigate('/admin');
    //     break;
    //   case 'operario':
    //     navigate('/operario');
    //     break;
    //   case 'encargado':
    //     navigate('/encargado');
    //     break;
    //   default:
    //     alert('Usuario desconocido');
    // }

    // Por ahora redirige directamente al Home Admin
    navigate('/iniciar-sesion');
  };

  return (
    <div className="inicio-container">
      <div className="overlay">
        <div className="logo-central">
          <img src="/img/logo.png" alt="Logo" />
          <button className="btn-entrar" onClick={handleEntrar}>ENTRAR</button>
        </div>
      </div>
      <footer className="footer-inicio">
        © 2024 • BISYS • Desarrollado por G12
      </footer>
    </div>
  );
};

export default Inicio;