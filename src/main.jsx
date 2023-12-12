import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from  './Home/Home.jsx';
import Destaque from './Destaque/Destaque.jsx';
import Cadastro from './Cadastro/Cadastro.jsx';
import Detalhe from './Detalhes/Detalhe.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/destaque' element={<Destaque/>}></Route>
        <Route path='/detalhes/:id' element={<Detalhe/>}></Route>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
