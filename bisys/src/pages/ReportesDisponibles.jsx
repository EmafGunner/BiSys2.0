import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeAdmin.css';
import './ReportesDisponibles.css';


const ReportesDisponibles = () => {
  const navigate = useNavigate();


  const reportes = [
    { texto: 'STOCK DISPONIBLE DE CAÑOS PARA LA PRODUCCIÓN', ruta: '/reporte-stock-canos' },
    { texto: 'MOVIMIENTOS DIARIOS DEL STOCK DE CAÑOS', ruta: '/reporte-movimientos-canos' },
    { texto: 'SCRAP DE CAÑO EN KG SEGÚN EL MATERIAL', ruta: '/reporte-scrap-canos' },
    { texto: 'STOCK DISPONIBLE DE PRODUCTOS POR RODADO', ruta: '/reporte-stock-productos' },
    { texto: 'MONITOREO DE STOCK CRÍTICO DE PRODUCTOS POR CATEGORÍA', ruta: '/reporte-stock-critico' },
    { texto: 'MOVIMIENTOS DIARIOS DEL STOCK DE PRODUCTOS', ruta: '/reporte-movimientos-productos' },
    { texto: 'SCRAP DE PRODUCTOS POR CANTIDAD DESAPROBADA', ruta: '/reporte-scrap-productos' },
    { texto: 'ÓRDENES DE PRODUCCIÓN POR ESTADO', ruta: '/reporte-ordenes-estado' },
  ];


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
            </ul>
          </nav>
        </div>
        
      </header>




      <main>
        <h2 className="subtitle">Reportes disponibles</h2>

        
        <section className="panel-control">
          <button className="modulo-btn" onClick={() => navigate('/reportes-generados')}>IR A REPORTES GENERADOS</button>

        </section>

        <p className="subleyenda">Seleccioná un reporte para consultar información clave sobre stock, producción y desempeño. Estos informes están pensados para ayudarte a tomar decisiones basadas en datos reales.</p>


        


        <div className="reporte-grid">
          {reportes.map((r, index) => (
            <div key={index} className="reporte-card" onClick={() => navigate(r.ruta)}>
              {r.texto}
            </div>
          ))}
        </div>
      </main>


      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  );
};


export default ReportesDisponibles;
