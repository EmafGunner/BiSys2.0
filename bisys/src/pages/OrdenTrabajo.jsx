import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./HomeAdmin.css";
import './OrdenTrabajo.css';

const datosMock = [
  { numero: 119, op: 48, pedido: "2025-05-12", entrega: "2025-05-30", estado: "Abierta", registro: "Habilitado", generacion: "2025-05-05 20:42:52", cierre: "", baja: "" },
  { numero: 118, op: 48, pedido: "2025-05-12", entrega: "2025-05-30", estado: "Abierta", registro: "Habilitado", generacion: "2025-05-05 20:42:52", cierre: "", baja: "" },
  { numero: 117, op: 47, pedido: "2025-05-03", entrega: "2025-05-09", estado: "Cerrada", registro: "Habilitado", generacion: "2025-05-03 19:14:05", cierre: "2025-05-03", baja: "" },
  { numero: 116, op: 46, pedido: "2025-05-03", entrega: "2025-05-09", estado: "Cerrada", registro: "Habilitado", generacion: "2025-05-03 19:01:43", cierre: "2025-05-03", baja: "" },
  { numero: 115, op: 45, pedido: "2025-05-03", entrega: "2025-05-09", estado: "Cerrada", registro: "Habilitado", generacion: "2025-05-03 19:01:43", cierre: "2025-05-03", baja: "" },
  { numero: 114, op: 44, pedido: "2025-05-03", entrega: "2025-05-09", estado: "Cerrada", registro: "Habilitado", generacion: "2025-05-03 18:57:38", cierre: "2025-05-03", baja: "" },
  { numero: 113, op: 43, pedido: "2025-05-03", entrega: "2025-05-09", estado: "Cerrada", registro: "Habilitado", generacion: "2025-05-03 18:50:00", cierre: "2025-05-03", baja: "2025-05-03" },
  { numero: 112, op: 42, pedido: "2025-05-03", entrega: "2025-05-09", estado: "Cerrada", registro: "Deshabilitado", generacion: "2025-05-03 18:17:56", cierre: "2025-05-03", baja: "" },
  { numero: 111, op: 41, pedido: "2025-05-03", entrega: "2025-05-09", estado: "Cerrada", registro: "Deshabilitado", generacion: "2025-05-03 18:00:00", cierre: "2025-05-03", baja: "2025-05-03" },
  { numero: 110, op: 40, pedido: "2025-04-20", entrega: "2025-04-25", estado: "Cerrada", registro: "Habilitado", generacion: "2025-04-21 13:11:48", cierre: "2025-04-21", baja: "" },
  { numero: 88, op: 33, pedido: "2025-04-20", entrega: "2025-04-25", estado: "Cerrada", registro: "Habilitado", generacion: "2025-04-21 13:11:48", cierre: "2025-04-21", baja: "" }
];

const OrdenTrabajo = () => {
  const [filtro, setFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [mostrar, setMostrar] = useState(25);
  const navigate = useNavigate();

  const handleLimpiar = () => {
    setFiltro("");
    setBusqueda("");
  };

  const datosFiltrados = datosMock.filter((item) => {
    if (!busqueda) return true;
    return Object.values(item).some((valor) => valor.toString().toLowerCase().includes(busqueda.toLowerCase()));
  });

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <img src="/img/logo.png" alt="Logo de Bisys" className="logo" onClick={() => navigate('/admin')} style={{ cursor: 'pointer' }} />
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

      <main>
        <h2 className="subtitle">Orden de trabajo</h2>

        <section className="panel-control">
          <button className="modulo-btn" onClick={() => navigate('/orden-produccion')}>IR A ORDEN DE PRODUCCIÓN</button>
          <button className="modulo-btn" onClick={() => navigate('/productos')}>IR A PRODUCTOS</button>

          <div className="filtro">
            <label>Filtrar por</label>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="estado">Estado</option>
              <option value="registro">Registro</option>
            </select>
          </div>
          <div className="busqueda">
            <label>Buscar</label>
            <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="por" />
          </div>
          <div className="mostrar">
            <label>Mostrar</label>
            <select value={mostrar} onChange={(e) => setMostrar(Number(e.target.value))}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
            <span>registros</span>
          </div>
          <div className="botones-panel">
            <button className="negativo" onClick={handleLimpiar}>Limpiar panel</button>
            <button className="positivo">Actualizar tabla</button>
          </div>
        </section>

        <table className="tabla">
          <thead>
            <tr>
              <th>Nº DE OT</th>
              <th>Nº DE OP</th>
              <th>FECHA DE PEDIDO OP</th>
              <th>FECHA DE ENTREGA OP</th>
              <th>ESTADO DE OT</th>
              <th>ESTADO DEL REGISTRO OT</th>
              <th>FECHA DE GENERACIÓN OT</th>
              <th>FECHA DE CIERRE OT</th>
              <th>FECHA DE BAJA OT</th>
              <th>ACCIÓN</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.slice(0, mostrar).map((item, index) => (
              <tr key={index}>
                <td>{item.numero}</td>
                <td>{item.op}</td>
                <td>{item.pedido}</td>
                <td>{item.entrega}</td>
                <td>{item.estado}</td>
                <td>{item.registro}</td>
                <td>{item.generacion}</td>
                <td>{item.cierre || '-'}</td>
                <td>{item.baja || '-'}</td>
                <td>
                  <div className="iconos-accion">
                    <i className="fas fa-search"></i>
                    <i className="fas fa-toggle-on"></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="paginacion">
          <button className="btn-paginacion">❮</button>
          <button className="btn-paginacion numero active">1</button>
          <button className="btn-paginacion">❯</button>
        </div>
      </main>

      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  );
};

export default OrdenTrabajo;
