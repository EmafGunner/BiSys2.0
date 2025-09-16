import { Routes, Route } from 'react-router-dom';

import Inicio from '../pages/Inicio'; // Importa la nueva página de inicio
import IniciarSesion from '../pages/IniciarSesion';
import HomeAdmin from '../pages/HomeAdmin';
import HomeEncargado from '../pages/HomeEncargado';
import HomeOperario from '../pages/HomeOperario';

import Canos from '../pages/Canos';
import Productos from '../pages/Productos';
import Scrap from '../pages/ScrapSeleccion'; 
import ScrapCanos from '../pages/ScrapCanos';
import ScrapProductos from '../pages/ScrapProductos';
import OrdenProduccion from '../pages/OrdenProduccion';
import OrdenTrabajo from '../pages/OrdenTrabajo';

import ReportesSeleccion from '../pages/ReportesSeleccion';
import ReportesGenerados from '../pages/ReportesGenerados';
import ReportesDisponibles from '../pages/ReportesDisponibles';

import GestionDeUsuarios from '../pages/GestionDeUsuarios';

const AppRouter = () => {
  // Más adelante vas a reemplazar este "userType" por uno traído desde la BD o login
  const userType = 'admin'; // 'operario', 'encargado'

  const renderHome = () => {
    switch (userType) {
      case 'admin':
        return <HomeAdmin />;
      case 'operario':
        return <HomeOperario />;
      case 'encargado':
        return <HomeEncargado />;
      default:
        return <div>Usuario desconocido</div>;
    }
  };

  return (
    <Routes>
      {/* Página principal dinámica */}
      <Route path="/" element={<Inicio />}/>

      {/* Página de inicio general */}
      <Route path="/inicio" element={<Inicio />}/>

      {/* Página de logueo */}
      <Route path="/iniciar-sesion" element={<IniciarSesion />} />

      {/* Accesos directos a cada tipo de usuario */}
      <Route path="/admin" element={<HomeAdmin />} />
      <Route path="/encargado" element={<HomeEncargado />} />
      <Route path="/operario" element={<HomeOperario />} />

      {/* Módulos compartidos */}
      <Route path="/canos" element={<Canos />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/scrap" element={<Scrap />} />
      <Route path="/orden-produccion" element={<OrdenProduccion />} />
      <Route path="/orden-trabajo" element={<OrdenTrabajo />} />
      <Route path="/scrap-canos" element={<ScrapCanos />} />
      <Route path="/scrap-productos" element={<ScrapProductos />} />

      {/* Módulos de reportes */}
      <Route path="/reportes-seleccion" element={<ReportesSeleccion />} />
      <Route path="/reportes-generados" element={<ReportesGenerados />} />
      <Route path="/reportes-disponibles" element={<ReportesDisponibles />} />

      <Route path="/GestionDeUsuarios" element={<GestionDeUsuarios />} />
    </Routes>
  );
};

export default AppRouter;