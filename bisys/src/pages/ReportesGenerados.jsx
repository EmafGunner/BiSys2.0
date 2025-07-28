import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeAdmin.css';
import './ReportesGenerados.css';

const ReportesGenerados = () => {
  const navigate = useNavigate();

  const [busqueda, setBusqueda] = useState('');
  const [mostrar, setMostrar] = useState(10);

  const datosMock = [
    { numero: 15, fecha: '2024-10-09', nombre: 'Stock Disponible de Caños para la Producción', solicitante: 'Joaquín Ferli' },
    { numero: 14, fecha: '2024-10-09', nombre: 'Stock Disponible de Caños para la Producción', solicitante: 'Joaquín Ferli' },
    { numero: 13, fecha: '2024-08-07', nombre: 'Stock Disponible de Caños para la Producción', solicitante: 'Carlos Valdez' },
    { numero: 12, fecha: '2024-08-07', nombre: 'Tiempo Promedio entre Incidentes de Productos por Operario', solicitante: 'Alejandro Tragedatura' },
    { numero: 11, fecha: '2024-08-07', nombre: 'Tendencias de Demanda por Modelo de Bicicleta', solicitante: 'Alejandro Tragedatura' },
    { numero: 10, fecha: '2024-08-07', nombre: 'Cumplimiento de Plazos en O.P Cerradas', solicitante: 'Carlos Valdez' },
    { numero: 9, fecha: '2024-08-07', nombre: 'Órdenes de Trabajo por Estado', solicitante: 'Carlos Valdez' },
    { numero: 8, fecha: '2024-08-07', nombre: 'Scrap de Productos por Cantidad Desaprobada', solicitante: 'Carlos Valdez' },
    { numero: 7, fecha: '2024-08-07', nombre: 'Movimientos del Stock de Productos', solicitante: 'Carlos Valdez' },
    { numero: 6, fecha: '2024-08-07', nombre: 'Monitoreo de Stock Crítico por Categoría', solicitante: 'Alejandro Tragedatura' },
    { numero: 5, fecha: '2024-08-07', nombre: 'Stock Disponible de Productos por Rodado', solicitante: 'Alejandro Tragedatura' },
    { numero: 4, fecha: '2024-08-07', nombre: 'Órdenes de Producción por Estado', solicitante: 'Alejandro Tragedatura' },
    { numero: 3, fecha: '2024-08-07', nombre: 'Scrap de Caño en Kg según el Material', solicitante: 'Alejandro Tragedatura' },
  ];

  const datosFiltrados = datosMock.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

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
        <h2 className="subtitle">Reportes generados</h2>

        <section className="panel-control">
          <button className="modulo-btn" onClick={() => navigate('/reportes-disponibles')}>IR A REPORTES DISPONIBLES</button>
        </section>

        <section className="tabla-contenedor">
          <div className="panel-filtros">
            <div className="filtro">
              <label>Filtrar por</label>
              <select>
                <option value="">Seleccionar</option>
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
            <button className="negativo">Limpiar panel</button>
            <button className="positivo">Actualizar tabla</button>
          </div>

          <table className="tabla">
            <thead>
              <tr>
                <th>NÚMERO DE REPORTE</th>
                <th>GENERADO EL</th>
                <th>NOMBRE DEL REPORTE</th>
                <th>SOLICITADO POR</th>
                <th>ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              {datosFiltrados.slice(0, mostrar).map((item, index) => (
                <tr key={index}>
                  <td>{item.numero}</td>
                  <td>{item.fecha}</td>
                  <td>{item.nombre}</td>
                  <td>{item.solicitante}</td>
                  <td className="acciones">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-toggle-off"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  );
};

export default ReportesGenerados;
