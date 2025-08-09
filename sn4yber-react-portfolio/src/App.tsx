import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-primary">
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
