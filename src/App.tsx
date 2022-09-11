import { useState } from 'react';
import { Link } from 'react-router-dom';
import Panel from './components/Panel';

function App() {
  return (
    <div className="App">
      <Panel />
      <button type='button' className='btn btn-primary'>Wow</button>
      <Link to="/portfolio">Portfolio</Link> |{" "}
      <Link to="/resume">Résumé</Link>
    </div>
  )
}

export default App;