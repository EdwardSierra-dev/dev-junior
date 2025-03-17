import React from 'react';
import Boton from './components/Boton.jsx';
import Display from './components/Display.jsx';
import BotonClear from './components/BotonClear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    input ? setInput(evaluate(input)) : alert('Por favor ingrese valores!');
    /*if (input) {
      setInput(evaluate(input));
    } else {
      alert('Ingresa valor para poder hacer la operación');
    }*/
  };

  return (
    <>
    <div className='App'>
      <h1>Calculadora</h1>
      <div className='contenedor-calculadora'>
        <Display input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
