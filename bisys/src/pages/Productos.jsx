import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./HomeAdmin.css";
import './Productos.css';

const datosMock = [
  { codigo: "CIV12", nombre: "Cuadro", categoria: "INFANTILES", modelo: "INFANTIL VARÓN", rodado: 12, stock: 85, minimo: 100 },
  { codigo: "HIV12", nombre: "Horquilla", categoria: "INFANTILES", modelo: "INFANTIL VARÓN", rodado: 12, stock: 0, minimo: 100 },
  { codigo: "MIV12", nombre: "Manubrio", categoria: "INFANTILES", modelo: "INFANTIL VARÓN", rodado: 12, stock: 25, minimo: 100 },
  { codigo: "CIN12", nombre: "Cuadro", categoria: "INFANTILES", modelo: "INFANTIL NENA", rodado: 12, stock: 25, minimo: 100 },
  { codigo: "HIN12", nombre: "Horquilla", categoria: "INFANTILES", modelo: "INFANTIL NENA", rodado: 12, stock: 185, minimo: 100 },
  { codigo: "MIN12", nombre: "Manubrio", categoria: "INFANTILES", modelo: "INFANTIL NENA", rodado: 12, stock: 100, minimo: 100 },
  { codigo: "CBA14", nombre: "Cuadro", categoria: "BMX", modelo: "ARROW", rodado: 14, stock: 200, minimo: 200 },
  { codigo: "HBA14", nombre: "Horquilla", categoria: "BMX", modelo: "ARROW", rodado: 14, stock: 200, minimo: 200 },
  { codigo: "MBA14", nombre: "Manubrio", categoria: "BMX", modelo: "ARROW", rodado: 14, stock: 200, minimo: 200 },
  { codigo: "CBA16", nombre: "Cuadro", categoria: "BMX", modelo: "ARROW", rodado: 16, stock: 300, minimo: 200 },
  { codigo: "HBA16", nombre: "Horquilla", categoria: "BMX", modelo: "ARROW", rodado: 16, stock: 300, minimo: 200 },
  { codigo: "MBA16", nombre: "Manubrio", categoria: "BMX", modelo: "ARROW", rodado: 16, stock: 300, minimo: 200 }
];

const Productos = () => {
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
        <h2 className="subtitle">Productos</h2>

        <section className="panel-control">
          <button className="modulo-btn" onClick={() => navigate('/orden-produccion')}>IR A ORDEN DE PRODUCCIÓN</button>
          <button className="modulo-btn" onClick={() => navigate('/orden-trabajo')}>IR A ORDEN DE TRABAJO</button>

          <div className="filtro">
            <label>Filtrar por</label>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="categoria">Categoría</option>
              <option value="modelo">Modelo</option>
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
              <th>NOMBRE</th>
              <th>CATEGORÍA</th>
              <th>MODELO</th>
              <th>RODADO</th>
              <th>STOCK DISPONIBLE</th>
              <th>NIVEL DE STOCK MÍNIMO</th>
              <th>GESTIÓN DE STOCK</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.slice(0, mostrar).map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.nombre}</td>
                <td>{item.categoria}</td>
                <td>{item.modelo}</td>
                <td>{item.rodado}</td>
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

export default Productos;
