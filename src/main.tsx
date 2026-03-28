import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import OrigamiStation from './components/OrigamiStation.tsx'
import Sessions from './components/Sessions.tsx'
import Gallery from './components/Gallery.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/origami-station" element={<OrigamiStation />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
