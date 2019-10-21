import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CategoriaProvider from './context/categoriasContext';
import Formulario from './components/Formulario'

function App() {
  return (
    <CategoriaProvider>
        <Header/>
        <div className="uk-container">
            <Formulario/>
        </div>
    </CategoriaProvider>
    
  );
}

export default App;
