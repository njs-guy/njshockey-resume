import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Portfolio from "./routes/Portfolio";
import Resume from "./routes/Resume";
import './index.css';

const rootElement = document.getElementById("root");
// Change from render
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="portfolio" element={<Portfolio />} /> 
      <Route path="resume" element={<Resume />} /> 
    </Routes>
  </BrowserRouter>,
  rootElement
);