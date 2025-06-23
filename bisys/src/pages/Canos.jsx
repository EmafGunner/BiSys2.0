import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./HomeAdmin.css";
import './Canos.css';

const datosMock = [
  { codigo: "AH24", material: "Acero", aleacion: "Hi-ten", diametro: 24, longitud: 950, stock: 200, minimo: 150 },
  { codigo: "AH25", material: "Acero", aleacion: "Hi-ten", diametro: 25, longitud: 960, stock: 200, minimo: 150 },
  { codigo: "AH26", material: "Acero", aleacion: "Hi-ten", diametro: 26, longitud: 980, stock: 300, minimo: 200 },
  { codigo: "AH27", material: "Acero", aleacion: "Hi-ten", diametro: 27, longitud: 1020, stock: 300, minimo: 200 },
  { codigo: "AH28", material: "Acero", aleacion: "Hi-ten", diametro: 28, longitud: 1050, stock: 300, minimo: 200 }
];

const Canos = () => {
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
          <img src="/img/logo.png" alt="Logo de Bisys" className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
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
        <h2 className="subtitle">Caños</h2>

        <section className="panel-control">
          <div className="filtro">
            <label>Filtrar por</label>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="material">Material</option>
              <option value="aleacion">Aleación</option>
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
          <button className="historial">Historial de Gestión de Stock</button>
        </section>

        <table className="tabla">
          <thead>
            <tr>
              <th>CÓDIGO</th>
              <th>MATERIAL</th>
              <th>ALEACIÓN</th>
              <th>DIÁMETRO (MM)</th>
              <th>LONGITUD (MM)</th>
              <th>STOCK DISPONIBLE</th>
              <th>NIVEL DE STOCK MÍNIMO</th>
              <th>GESTIÓN DE STOCK</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.slice(0, mostrar).map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.material}</td>
                <td>{item.aleacion}</td>
                <td>{item.diametro}</td>
                <td>{item.longitud}</td>
                <td>{item.stock}</td>
                <td>{item.minimo}</td>
                <td><input type="checkbox" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  );
};

export default Canos;
