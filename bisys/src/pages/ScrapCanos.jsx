import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./HomeAdmin.css";
import './ScrapCanos.css';

const datosMock = [
  { fecha: "2025-04-23 13:50:50", material: "Acero", peso: 7 },
  { fecha: "2025-04-23 13:46:05", material: "Acero", peso: 8.01 },
  { fecha: "2025-04-23 13:36:54", material: "Acero", peso: 17.4 },
  { fecha: "2024-09-09 11:38:52", material: "Fibra de Carbono", peso: 5 },
  { fecha: "2024-09-09 11:38:23", material: "Aluminio", peso: 10 },
  { fecha: "2024-08-06 15:31:43", material: "Acero", peso: 5.5 },
  { fecha: "2024-08-01 21:11:30", material: "Acero", peso: 15 },
  { fecha: "2024-08-01 21:11:30", material: "Acero", peso: 30 }
];

const ScrapCanos = () => {
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

            </ul>
          </nav>
        </div>
      </header>

      <main>
        <h2 className="subtitle">Scrap caños</h2>

        <section className="panel-control">
          <button className="modulo-btn" onClick={() => navigate('/productos')}>IR A SCRAP PRODUCTOS</button>
          <p className="subleyenda">Generado en el proceso de corte y desbocado.</p>

          <div className="filtro">
            <label>Filtrar por</label>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="material">Material</option>
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
          <button className="historial">SCRAP CAÑO</button>
        </section>

        <table className="tabla">
          <thead>
            <tr>
              <th>FECHA</th>
              <th>MATERIAL</th>
              <th>PESO(KG)</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.slice(0, mostrar).map((item, index) => (
              <tr key={index}>
                <td>{item.fecha}</td>
                <td>{item.material}</td>
                <td>{item.peso}</td>
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

export default ScrapCanos;
