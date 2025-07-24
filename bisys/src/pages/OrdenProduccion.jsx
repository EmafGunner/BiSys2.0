import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./HomeAdmin.css";
import './OrdenProduccion.css';

const datosMock = [
  { numero: 48, pedido: "2025-05-12", entrega: "2025-05-30", estado: "Abierta", cierre: "2025-05-13", categoria: "A Tiempo", registro: "Habilitado", generacion: "2025-05-05 20:42:52", baja: "" },
  { numero: 47, pedido: "2025-05-03", entrega: "2025-05-09", estado: "Cerrada", cierre: "2025-05-09", categoria: "A Tiempo", registro: "Habilitado", generacion: "2025-05-03 19:08:53", baja: "" },
  { numero: 46, pedido: "2025-05-03", entrega: "2025-05-09", estado: "Cerrada", cierre: "2025-05-09", categoria: "Anticipada", registro: "Habilitado", generacion: "2025-05-03 19:01:43", baja: "" },
  { numero: 45, pedido: "2025-05-03", entrega: "2025-05-09", estado: "Cerrada", cierre: "2025-05-09", categoria: "Anticipada", registro: "Habilitado", generacion: "2025-05-03 18:57:38", baja: "" },
  { numero: 44, pedido: "2025-05-03", entrega: "2025-05-09", estado: "Cerrada", cierre: "2025-05-09", categoria: "Anticipada", registro: "Habilitado", generacion: "2025-05-03 18:50:00", baja: "2025-05-03" },
  { numero: 23, pedido: "2025-04-20", entrega: "2025-05-02", estado: "Cerrada", cierre: "2025-05-03", categoria: "Fuera de Tiempo", registro: "Habilitado", generacion: "2025-04-21 13:11:48", baja: "" },
  { numero: 20, pedido: "2025-04-20", entrega: "2025-04-30", estado: "Cerrada", cierre: "2025-04-30", categoria: "Anticipada", registro: "Deshabilitado", generacion: "2025-04-20 18:17:56", baja: "" },
  { numero: 19, pedido: "2024-09-16", entrega: "2024-09-25", estado: "Cerrada", cierre: "2024-09-25", categoria: "Deshabilitado", registro: "Habilitado", generacion: "2024-09-23 13:14:09", baja: "2024-09-17" },
  { numero: 18, pedido: "2024-04-10", entrega: "2024-04-25", estado: "Cerrada", cierre: "2024-04-25", categoria: "Fuera de Tiempo", registro: "Deshabilitado", generacion: "2024-04-10 14:50:09", baja: "" },
  { numero: 1, pedido: "2024-04-03", entrega: "2024-04-13", estado: "Cerrada", cierre: "2024-04-10", categoria: "Habilitado", registro: "Habilitado", generacion: "2024-07-31 15:20:20", baja: "" }
];

const OrdenProduccion = () => {
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
        <h2 className="subtitle">Orden de producción</h2>

        <section className="panel-control">
          <button className="modulo-btn" onClick={() => navigate('/orden-trabajo')}>IR A ORDEN DE TRABAJO</button>
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

          <button className="crear-btn">
            <i className="fas fa-plus"></i> Agregar orden de producción
          </button>
        </section>

        <table className="tabla">
          <thead>
            <tr>
              <th>NÚMERO DE OP</th>
              <th>FECHA DE PEDIDO</th>
              <th>FECHA DE ENTREGA</th>
              <th>ESTADO DE OP</th>
              <th>FECHA DE CIERRE OP</th>
              <th>CATEGORÍA DEL CIERRE</th>
              <th>ESTADO DEL REGISTRO</th>
              <th>FECHA DE GENERACIÓN</th>
              <th>FECHA DE BAJA</th>
              <th>ACCIÓN</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.slice(0, mostrar).map((item, index) => (
              <tr key={index}>
                <td>{item.numero}</td>
                <td>{item.pedido}</td>
                <td>{item.entrega}</td>
                <td>{item.estado}</td>
                <td>{item.cierre}</td>
                <td>{item.categoria}</td>
                <td>{item.registro}</td>
                <td>{item.generacion}</td>
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

export default OrdenProduccion;
