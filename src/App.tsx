import { useState } from 'react';
// import { Link } from 'react-router-dom';

import Panel from './components/Panel';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App m-5">
      <div className="flex flex-col space-y-4">
          <NavBar />
          <Panel />
          <button type='button' className="btn btn-primary">Wow</button>
      </div>
    </div>
  )
}

export default App;