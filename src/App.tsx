import { useState } from 'react';
import { Link } from 'react-router-dom';
import Panel from './components/Panel';

function App() {
  return (
    <div className="App m-5">
      <div className="flex flex-col gap-4">
          <ul className="menu menu-horizontal bg-base-200 rounded-box grow-0 object-center self-center">
            <li><Link to="/">About</Link></li>
            <li><Link to="portfolio">Portfolio</Link></li>
            <li><Link to="resume">Résumé</Link></li>
          </ul>
          <Panel />
          <button type='button' className="btn btn-primary">Wow</button>
      </div>
    </div>
  )
}

export default App;