import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from "./components/Main/Main"
import { Aros } from './pages/Aros';
import { Collares } from './pages/Collares';
import { Nosotros } from './pages/Nosotros';
import { Contacto } from './pages/Contacto';
import { Pulseras } from './pages/Pulseras';
import ItemsDetailContainer from './pages/ItemsDetailContainer';
import CategoryPage from './pages/CategoryPage';
import Error from './pages/Error';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="aros" element={<Aros />} />
          <Route path="collares" element={<Collares />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="pulseras" element={<Pulseras />} />
          <Route path="categoria/:categoriaId" element={<CategoryPage />} /> 
          <Route path="producto/:productoId" element={<ItemsDetailContainer />} />
          <Route path='*' element={<Error/>}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;



