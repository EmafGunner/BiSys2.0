import React, { useEffect, useState } from "react";  //  useEffect
import { useNavigate } from "react-router-dom";
import "../pages/GestionDeUsuarios.css";
import RegistrarUsuarioButton from "../components/RegistrarUsuarioButton";

const GestionDeUsuarios = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [usuarios, setUsuarios] = useState([]);

const cargarUsuarios = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/users?limit=50&offset=0");
    const data = await res.json();
    setUsuarios(data?.usuarios || []);
  } catch (e) {
    console.error(e);
  }
};

useEffect(() => {
  cargarUsuarios();
}, []);

  return (
    <div className="gestion-container">
      <header className="header">
        <div className="header-left">
          <img
            src="/img/logo.png"
            alt="Logo de Bisys"
            className="logo"
            onClick={() => navigate("/admin")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="header-center">
          <h1>Bicicletas Enrique</h1>
        </div>

        <div className="header-right">
          <nav className="nav">
            <ul>
              <li onClick={() => navigate("/admin")}>HOME</li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <h2 className="subtitle">Gestión de usuarios</h2>

        <div className="panel-control">
          <select>
            <option value="">Seleccionar</option>
            {/* Filtros */}
          </select>

          <input type="text" placeholder="Buscar por..." />

          <label>
            Mostrar
            <select>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            registros
          </label>

          <button className="btn-danger">❌ Limpiar panel</button>
          <button className="btn-success">✅ Actualizar tabla</button>
          <button className="btn-add" onClick={() => setIsModalOpen(true)}>
          👤 Registrar usuario
          </button>

        </div>

        <div className="tabla-contenedor">
          <table>
            <thead>
              <tr>
                <th>USUARIO</th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>TIPO DE DOC.</th>
                <th>N° DE DOC.</th>
                <th>CORREO ELECTRÓNICO</th>
                <th>PUESTO</th>
                <th>ÁREA</th>
                <th>ROL</th>
                <th>ESTADO</th>
                <th>FECHA DE REGISTRACIÓN</th>
                <th>FECHA DE BAJA</th>
                <th>ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
  {usuarios.map((u, i) => (
    <tr key={u.IdUsuario ?? i}>
      <td>{u.Usuario}</td>
      <td>{u.Nombre}</td>
      <td>{u.Apellido}</td>
      <td>{u.TipoDeDocumento}</td>
      <td>{u.NumeroDeDocumento}</td>
      <td>{u.CorreoElectronico}</td>
      <td>{u.Puesto}</td>  
      <td>{u.Area}</td>
      <td>{u.Rol}</td>
      <td>{u.Estado}</td>
      <td>{u["Fecha de Registración"] ?? u.FechaDeAlta}</td>
      <td>{u["Fecha de Baja del Usuario"] ?? u.FechaDeBaja}</td>
      <td className="acciones">
        <button>✏️</button>
        <button>❌</button>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </main>



      {/* Modal */}
  
    {isModalOpen && (
  <RegistrarUsuarioButton
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    onRegistered={cargarUsuarios}  
  />
)}


    </div>
  );
};
      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>

export default GestionDeUsuarios;
