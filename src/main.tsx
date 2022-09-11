import React from 'react'
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import Page1 from "./routes/Page1";
import Page2 from "./routes/Page2";
import './index.css'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="Page1" element={<Page1 />} /> 
      <Route path="Page2" element={<Page2 />} /> 
    </Routes>
  </BrowserRouter>,
  rootElement
);