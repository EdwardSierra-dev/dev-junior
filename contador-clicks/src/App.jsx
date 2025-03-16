import './App.css'
import React from 'react';
import Boton from './components/Boton.jsx';
import Contador from './components/Contador.jsx';
import { useState } from 'react';

function App() {

  //      Variable     Funcion       Estado inicial
  //      Estado actual / Funcion para actualizar el estado / Estado inicial
  const [numClicks, setNumClicks] = useState(0);
  // El estado que quise manejar del mi componente es el estado del texto contador

  // Se agrega 1 al estado inicial y anterior del contador
  const contarClicks = () => {
    setNumClicks(numClicks + 1);
  };

  // Se le asigna 0 al estado actual del contador
  const reiniciarClicks = () => {
    setNumClicks(0);
  };

  return (
    <>
      <div className='App'>
        <div className='fcc-logo-contenedor'>
          <h1>Contador de Clicks</h1>
        </div>
        <div className={'main-contenedor'}>
          <Contador clicks={numClicks}/>
          <Boton 
            text='Click me'
            esBotonClick={true}
            contarClicks={contarClicks} />
          <Boton 
            text='Reiniciar'
            esBotonClick={false}
            contarClicks={reiniciarClicks} />
        </div>
      </div>
    </>
  )
}

export default App
