import { Routes, Route } from 'react-router-dom'
import HomeAdmin from '../pages/HomeAdmin'
import HomeOperario from '../pages/HomeOperario'
import HomeSupervisor from '../pages/HomeSupervisor'
import Canos from '../pages/Canos'
import Productos from '../pages/Productos'
import Scrap from '../pages/Scrap'
import OrdenProduccion from '../pages/OrdenProduccion'
import OrdenTrabajo from '../pages/OrdenTrabajo'
import Reportes from '../pages/Reportes'

const AppRouter = () => {
  // Más adelante vas a reemplazar este "userType" por uno traído desde la BD o login
  const userType = 'admin' // 'operario', 'supervisor'

  const renderHome = () => {
    switch (userType) {
      case 'admin':
        return <HomeAdmin />
      case 'operario':
        return <HomeOperario />
      case 'supervisor':
        return <HomeSupervisor />
      default:
        return <div>Usuario desconocido</div>
    }
  }

  return (
    <Routes>
      <Route path="/" element={renderHome()} />
      <Route path="/canos" element={<Canos />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/scrap" element={<Scrap />} />
      <Route path="/orden-produccion" element={<OrdenProduccion />} />
      <Route path="/orden-trabajo" element={<OrdenTrabajo />} />
      <Route path="/reportes" element={<Reportes />} />
    </Routes>
  )
}

export default AppRouter
