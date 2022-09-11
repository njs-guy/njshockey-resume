import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById("root");
// Change from render
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);