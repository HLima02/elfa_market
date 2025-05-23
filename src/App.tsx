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
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<ProductListing />} />
        <Route path="/cadastrar_produtos" element={<ProductRegistration />} />
      </Routes>
    </BrowserRouter>
  )
}
