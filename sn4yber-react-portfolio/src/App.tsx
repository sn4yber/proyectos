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
      <div className="relative min-h-screen overflow-x-hidden">
        <MatrixRain />
        <ParticleSystem />
        <MagneticCursor />
        <div className="relative z-20">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
