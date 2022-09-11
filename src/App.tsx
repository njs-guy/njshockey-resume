import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary">Wow</button>
      <Link to="/portfolio">Portfolio</Link> |{" "}
      <Link to="/resume">Résumé</Link>
    </div>
  )
}

export default App;