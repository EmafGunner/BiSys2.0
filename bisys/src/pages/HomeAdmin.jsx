import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeAdmin.css'

const HomeAdmin = () => {
  const navigate = useNavigate()

  const botones = [
    { nombre: 'Caños', ruta: '/canos', img: '/img/canos.jpg' },
    { nombre: 'Productos', ruta: '/productos', img: '/img/productos.jpg' },
    { nombre: 'Scrap', ruta: '/scrap', img: '/img/scrap.jpg' },
    { nombre: 'Orden de Producción', ruta: '/orden-produccion', img: '/img/ordenProduccion.jpg' },
    { nombre: 'Orden de Trabajo', ruta: '/orden-trabajo', img: '/img/ordenTrabajo.jpg' },
    { nombre: 'Reportes', ruta: '/reportes', img: '/img/reportes.png' }
  ]

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <img src="/img/logo.png" alt="Logo Bisys" className="logo" />
        </div>
        <div className="header-center">
          <h1>Bicicletas Enrique</h1>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li><a href="#">GESTIÓN DE USUARIOS</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <h2 className="subtitle">Home</h2>
        <div className="botones-container">
          {botones.map((btn, index) => (
            <div key={index} className="boton" onClick={() => navigate(btn.ruta)}>
              <img src={btn.img} alt={btn.nombre} className="imagen-home" />
              <span>{btn.nombre.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>© 2024 • BISYS • Desarrollado por G12</p>
      </footer>
    </div>
  )
}

export default HomeAdmin
