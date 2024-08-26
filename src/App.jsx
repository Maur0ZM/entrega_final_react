import React from 'react';
import { Header } from './components/header/Header';
import { ItemListContainer } from './components/Main/itemListContainer/itemListContainer';

function App() {
  return (
   <>
        <Header></Header>
        <ItemListContainer mensaje="Bienvenido a Jojas Pam"/>
   </>
  );
}

export default App;
