import React from 'react';
import Testimino from './components/Testimino.jsx';
import './App.css';

function App() {

  return (
    <>
      <div className='App'>
          <div className='main-container'>
          <h1>Esto es lo que dice el makia</h1>
          <Testimino 
            name='Edward Sierra'
            profession='Ingeniero de Sistemas'
            job='QA'
            hobby='Frontend Developer'
            empresa='Rhiscom'
            testimino='Edward el papi es un makia que le pone onda a la vida. Es un crack y un genio. Todos lo aman.' />
          <Testimino 
            name='María Patricia'
            profession='Contadora'
            job='Asistente Contable'
            hobby='Cocinar'
            empresa='BlueTrans'
            testimino='María Patricia es una genia. Es la mejor contadora que he conocido. Es muy inteligente y muy trabajadora.' />
        </div>
      </div>
    </>
  )
}

export default App;
