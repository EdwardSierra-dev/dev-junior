import React from 'react';
import foto from '../images/foto44.png';

// This is a functional component
function Testimino() {
  // This component returns JSX. 
  return (
    <>
    {/* No usamos class sino CLASSNAME */}
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={foto}
      alt='Foto de Edward el papi'
      />
    </div>
    <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>Edward Sierra</p>
      <p className='cargo-testimonio'>Ingeniero de Sistemas / QA / Frontend Dev</p>
      <p className='texto-testimonio'>Hola buenas tardes a todos, saludos desde mi web de estudio</p>
    </div>
    </>
  );
}

export default Testimino;
// This is a functional component that returns JSX.
// This component is imported into App.jsx.
// This component is rendered in App.jsx.