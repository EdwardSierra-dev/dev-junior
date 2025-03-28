import React from 'react';
import '../styles/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ texto }) {
  return (
    <div className="tarea-contenedor">
      <div className='tarea-texto'>
        <p>{texto}</p>
      </div>
      <div className='tarea-icono'>
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );
}

export default Tarea;
// import React from 'react';