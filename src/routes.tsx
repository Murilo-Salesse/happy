import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/Orphanagesmap';
import Orphanages from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<OrphanagesMap />} />

        <Route path="/orphanages/:id" element={<Orphanages />} />
        <Route path="/orphanages/create" element={<CreateOrphanage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
