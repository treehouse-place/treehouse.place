import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import OrigamiStation from './components/OrigamiStation.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/origami-station" element={<OrigamiStation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
