import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Navbar } from './Components/Navbar';
import { ProjectDisplay } from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
