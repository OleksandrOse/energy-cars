import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import './index.css';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { AboutPage } from './pages/AboutPage/AboutPage';


import { ServicesPage } from './pages/ServicesPage/ServicesPage';
import { CatalogList } from './pages/CatalogPage/CatalogPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/головна" element={<Navigate to="/" replace />} />

        <Route path="/про-нас" element={<AboutPage />} />
        <Route path="/послуги" element={<ServicesPage />} />
        <Route path="/каталог-автомобілів" element={<CatalogList title='Каталог автомобілів' />} />

        <Route path="/відгуки" element={<ServicesPage />} />

        <Route path="/контакти" element={<ServicesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
  </React.StrictMode>,
);

