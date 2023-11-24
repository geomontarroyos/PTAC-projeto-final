import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import Destaque from './Destaque/destaque';
import Cadastro from './Cadastro/cadastro';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/destaque' element={<Destaque/>}></Route>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
