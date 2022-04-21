import React from 'react';
import {render} from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import './index.css';
import Contact from './components/Contact'
import ServicesPage from './components/pages/components/ServicesPage/ServicesPage';
import AboutUsPage from './components/pages/components/AboutUsPage/AboutUsPage';
import ErrorPage from './components/pages/components/ErrorPage/ErrorPage';
import ContactUsPage from './components/pages/components/ContactUsPage/ContactUsPage';

render(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-services" element={<ServicesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
