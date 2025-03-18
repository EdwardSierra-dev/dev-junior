import React from 'react';

function Card ({ id, name, species, gender, pic }) {
  return (
    <div className='contenedor-card'>
      <div className='contenedor-foto-personaje'>
        <img src={pic} />
      </div>
      <div className='contenedor-info-personaje'>
        <h2>Nombre: {name}</h2>
        <h2>ID: {id}</h2>
        <p>Especie: {species}</p>
        <p>Genero: {gender}</p>
      </div>
    </div>
  );
}

export default Card;