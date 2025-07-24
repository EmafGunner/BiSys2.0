import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/GestionDeUsuarios.css";

const GestionDeUsuarios = () => {
  const navigate = useNavigate();

  return (
    <div className="gestion-container">
      <header className="header">
        <div className="header-left">
          <img src="/img/logo.png" alt="Logo de Bisys" className="logo" onClick={() => navigate('/admin')} style={{ cursor: 'pointer' }} />
        </div>

        <div className="header-center">
          <h1>Bicicletas Enrique</h1>
        </div>

        <div className="header-right">
          <nav className="nav">
            <ul>
              <li onClick={() => navigate('/admin')}>HOME</li>
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

          <button className="btn-add">👤 Registrar usuario</button>
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
              {/* Simulación de usuarios */}
              <tr>
                <td>25123456</td>
                <td>Alejandro</td>
                <td>Trapograda</td>
                <td>DNI</td>
                <td>25123456</td>
                <td>alejandro@gmail.com</td>
                <td>Ingeniero</td>
                <td>Metalúrgica</td>
                <td>Administrador</td>
                <td>Habilitado</td>
                <td>2024-06-26</td>
                <td></td>
                <td className="acciones">
                  <button>✏️</button>
                  <button>❌</button>
                </td>
              </tr>
              {/* Más filas */}
            </tbody>
          </table>
        </div>
      </main>

      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  );
};

export default GestionDeUsuarios;
