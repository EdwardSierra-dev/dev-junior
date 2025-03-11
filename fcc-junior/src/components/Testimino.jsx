import React from 'react';
import foto from '../images/foto44.png';
import '../stylesheets/Testimonio.css';

// This is a functional component
function Testimino(props) {
  // This component returns JSX. 
  return (
    <>
    {/* No usamos class sino CLASSNAME */}
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={foto}
      alt='Foto de Edward el papi' />
      <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'><strong>{props.name}</strong></p>
      <p className='cargo-testimonio'>{props.profession} / {props.job} at {props.empresa} / {props.hobby}</p>
      <p className='texto-testimonio'>{props.testimino}</p>
    </div>
    </div>

    </>
  );
}

export default Testimino;
// This is a functional component that returns JSX.
// This component is imported into App.jsx.
// This component is rendered in App.jsx.