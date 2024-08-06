// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import './index.css';

// Configuration Components
import App from './App';
import Admin from "./components/admin/Admin";
import NotFound from "./components/NotFound";

// Pages
import About from './components/main/About';
import Contact from "./components/main/Contact"
import Home from './components/main/Home';
import Services from "./components/main/Services";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
