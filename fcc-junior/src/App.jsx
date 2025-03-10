import React from 'react';
import Testimino from './components/Testimino.jsx';
import './App.css';

function App() {

  return (
    <>
      <div className='App'>
          <div className='main-container'>
          <h1>Esto es lo que dice el makia</h1>
          <Testimino />
        </div>
      </div>
      <p>
        Esto es para aprender React ahora si cv!
      </p>
    </>
  )
}

export default App;
