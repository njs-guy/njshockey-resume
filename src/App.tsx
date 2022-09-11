import { useState } from 'react';
// import { Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Panel from './components/Panel';

function App() {
  return (
    <div className="App m-5">
      <div className="flex flex-col space-y-4">
          <NavBar active={0} />
          <Panel text="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non enim lacus. Morbi at vestibulum odio. Ut scelerisque magna sed mauris feugiat, et ornare sapien mollis. Nunc a tellus in odio tempus rhoncus. Curabitur sed neque quis orci facilisis condimentum et sed magna. Phasellus posuere tempus imperdiet. Nulla facilisi.
          " />
          <button type="button" className="btn btn-primary">Wow</button>
      </div>
    </div>
  )
}

export default App;