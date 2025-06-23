import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/IniciarSesion.css";

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("El usuario debe ser un correo electrónico válido.");
      return;
    }
    if (contrasena.length < 8 || contrasena.length > 20) {
      setError("La contraseña debe tener entre 8 y 20 caracteres.");
      return;
    }
    // Redirección directa a HomeAdmin (sin validar contra base de datos)
    navigate('/admin');
  };

  return (
    <div className="contenedor-login">
      <header className="header">
        <img src="/img/logo.png" alt="Logo de Bisys" className="logo" />
        <h1 className="titulo">Bicicletas Enrique</h1>
      </header>

      <h2 className="subtitulo">Iniciar sesión</h2>

      <form onSubmit={handleSubmit} className="formulario">
        {error && <p className="error">{error}</p>}

        <label>Usuario</label>
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Tu contraseña segura"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <div className="acciones">
          <button type="submit">Iniciar Sesión</button>
          <label>
            <input type="checkbox" /> Mantener conexión
          </label>
        </div>

        <a href="#" className="olvido">¿Olvidaste tu contraseña?</a>
      </form>

      <footer className="footer">
        © 2024 • BISYS • Desarrollado por G12
      </footer>
    </div>
  );
};

export default IniciarSesion;