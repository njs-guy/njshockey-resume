import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary">Wow</button>
      <Link to="/Page1">Page 1</Link> |{" "}
      <Link to="/Page2">Page 2</Link>
    </div>
  )
}

export default App