import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import Origins from './components/Origins.jsx';
import Relationship from './components/Relationship.jsx';
import Ethics from './components/Ethics.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/engl-multi">
    <Routes>
      <Route index element={<Home />} />
      <Route path="origins" element={<Origins />} />
      <Route path="relationship" element={<Relationship />} />
      <Route path="ethics" element={<Ethics />} />

    </Routes>
  </BrowserRouter>
)
