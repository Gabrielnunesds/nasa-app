import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import APOD from './pages/APOD';
import Images from './pages/Images';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apod" element={<APOD />} />
      <Route path="/images" element={<Images />} />
    </Routes>
  </Router>
);

export default AppRoutes;
