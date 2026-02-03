import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LibraryPage from './pages/LibraryPage'

function App() {
  return (
    <>
      <div className="grain-overlay"></div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/library" element={<LibraryPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
