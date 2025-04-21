import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import ProductListing from './pages/ProductListing'
import ProductRegistration from './pages/ProductRegistration'

import './App.globals.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/painel" element={<Dashboard />} />
        <Route path="/lista_produtos" element={<ProductListing />} />
        <Route path="/cadastrar_produtos" element={<ProductRegistration />} />
      </Routes>
    </BrowserRouter>
  )
}
