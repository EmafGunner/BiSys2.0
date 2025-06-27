import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./HomeAdmin.css";
import './ScrapProductos.css';

const datosMock = [
  { fecha: "2025-05-03", numeroOP: 47, producto: "Manubrio", cantidad: 5 },
  { fecha: "2024-09-25", numeroOP: 18, producto: "Cuadro", cantidad: 20 },
  { fecha: "2024-09-25", numeroOP: 18, producto: "Cuadro", cantidad: 3 },
  { fecha: "2024-09-25", numeroOP: 18, producto: "Horquilla", cantidad: 15 },
  { fecha: "2024-04-10", numeroOP: 1, producto: "Cuadro", cantidad: 10 },
  { fecha: "2024-04-10", numeroOP: 1, producto: "Horquilla", cantidad: 20 }
];

const ScrapProductos = () => {
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
              <li onClick={() => navigate('/')}>HOME</li>
              <li>GESTIÓN DE USUARIOS</li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <h2 className="subtitle">Scrap productos</h2>

        <section className="panel-control">
          <button className="modulo-btn" onClick={() => navigate('/scrap-canos')}>IR A SCRAP CAÑOS</button>
        </section>

        <p className="subleyenda">Scrap de productos no aprobados por control.</p>

        <section className="panel-control">
          <div className="filtro">
            <label>Filtrar por</label>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="producto">Producto</option>
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
              <th>FECHA DE CIERRE OP</th>
              <th>NÚMERO DE OP</th>
              <th>PRODUCTO</th>
              <th>CANTIDAD DESAPROBADA</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.slice(0, mostrar).map((item, index) => (
              <tr key={index}>
                <td>{item.fecha}</td>
                <td>{item.numeroOP}</td>
                <td>{item.producto}</td>
                <td>{item.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="paginacion">
          <button className="btn-paginacion">❮</button>
          <button className="btn-paginacion numero active">1</button>
          <button className="btn-paginacion">❯</button>
        </div>

        <p className="footer-info">Mostrando 1 - {datosFiltrados.length} de {datosFiltrados.length}</p>
      </main>

      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  );
};

export default ScrapProductos;
