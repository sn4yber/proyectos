import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
import { Home } from './pages/Home'
import { Projects } from './pages'
import { MatrixRain } from './components/MatrixRain/MatrixRain'
import { MagneticCursor } from './components/MagneticCursor/MagneticCursor'
import { ParticleSystem } from './components/ParticleSystem/ParticleSystem'

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <MatrixRain />
        <ParticleSystem />
        <MagneticCursor />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
