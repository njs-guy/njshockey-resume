import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PageNotFound from './routes/PageNotFound';
import Portfolio from './routes/Portfolio';
import Resume from './routes/Resume';

function App() {
  return (
    <main>
      <div className="App m-5 flex flex-col space-y-4">
      <NavBar active={0} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </div>
    </main>
  )
}

export default App;