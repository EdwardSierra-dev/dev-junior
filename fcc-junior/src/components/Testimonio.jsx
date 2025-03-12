import React from 'react';
import foto from '../images/foto44.png';
import '../stylesheets/Testimonio.css';

// This is a functional component
function Testimonio(props) {
  // This component returns JSX. 
  return (
    <>
    {/* No usamos class sino CLASSNAME */}
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={foto}
      alt={props.name} />
      <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'><strong>{props.name}</strong></p>
      <p className='cargo-testimonio'>{props.profession} / {props.job} at {props.work} / {props.hobby}</p>
      <p className='texto-testimonio'>{props.testimonio}</p>
    </div>
    </div>

    </>
  );
}

export default Testimonio;
// This is a functional component that returns JSX.
// This component is imported into App.jsx.
// This component is rendered in App.jsx.