import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Páginas principais
import Home from './pages/Home';
import VonicProducts from './pages/VonicProducts';
import MastipProducts from './pages/MastipProducts';

// Páginas de categorias de produtos
import HotNozzles from './pages/products/HotNozzles';
import Manifolds from './pages/products/Manifolds';
import HotHalf from './pages/products/HotHalf';
import Controllers from './pages/products/Controllers';
import Filters from './pages/products/Filters';
import NewProducts from './pages/products/NewProducts';

// Páginas de séries específicas
import VHSeries from './pages/products/series/VHSeries';
import VTSeries from './pages/products/series/VTSeries';
import VPSeries from './pages/products/series/VPSeries';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas principais */}
      <Route path="/" element={<Home />} />
      <Route path="/produtos/vonic" element={<VonicProducts />} />
      <Route path="/produtos/mastip" element={<MastipProducts />} />

      {/* Rotas de categorias de produtos */}
      <Route path="/produtos/vonic/novidades" element={<NewProducts />} />
      <Route path="/produtos/vonic/bicos" element={<HotNozzles />} />
      <Route path="/produtos/vonic/manifolds" element={<Manifolds />} />
      <Route path="/produtos/vonic/hot-half" element={<HotHalf />} />
      <Route path="/produtos/vonic/controladores" element={<Controllers />} />
      <Route path="/produtos/vonic/filtros" element={<Filters />} />

      {/* Rotas de séries específicas */}
      <Route path="/produtos/vonic/bicos/vh" element={<VHSeries />} />
      <Route path="/produtos/vonic/bicos/vt" element={<VTSeries />} />
      <Route path="/produtos/vonic/bicos/vp" element={<VPSeries />} />
    </Routes>
  );
};

export default AppRoutes; 