import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'
import ProgramsPage from './Pages/ProgramsPage'
import RadioPage from './Pages/RadioPage'
import ContactPage from './Pages/ContactPage'
import LegalAwarenessPage from './Pages/LegalAwarenessPage'
import VideosPage from './Pages/VideosPage'
import NotFoundPage from './Pages/404'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/program" element={<ProgramsPage />} />
        <Route path="/radio" element={<RadioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal-awareness" element={<LegalAwarenessPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App