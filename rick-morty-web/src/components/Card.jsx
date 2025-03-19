import React from 'react';
import '../styles/Card.css'

function Card ({ id, name, species, gender, pic }) {
  return (
    <div className='contenedor-card'>
      <div className='contenedor-foto-personaje'>
        <img src={pic} />
      </div>
      <div className='contenedor-info-personaje'>
        <p className='titulo-nombre'><strong>Nombre:</strong> {name}</p>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Especie:</strong> {species}</p>
        <p><strong>Genero:</strong> {gender}</p>
      </div>
    </div>
  );
}

export default Card;