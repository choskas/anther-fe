import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx'
import Layout from './pages/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/users" element={<p>users</p>} />
        </Route>
  </Routes>
  
  </BrowserRouter>,
)
